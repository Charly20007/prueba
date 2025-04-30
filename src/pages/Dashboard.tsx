import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Notification from "../components/Notification";
import dashboardData from "../data/dashboardData";

const revenueData = [
  { day: "Ago 10", revenue: 12500 },
  { day: "Ago 11", revenue: 14200 },
  { day: "Ago 12", revenue: 15900 },
  { day: "Ago 13", revenue: 13500 },
  { day: "Ago 14", revenue: 16400 },
  { day: "Ago 15", revenue: 17500 },
];

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [notification, setNotification] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    setNotification("¡Cerrando sesión!");
  
    setTimeout(() => {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/");
    }, 2000);
  };
  
  const filteredCategories = dashboardData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onLogout={handleLogout} />

      {/* Contenido Principal */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-700">Bienvenido, {user?.username}</h2>
        </div>

        <Notification message={notification} />
        

        {/* Tarjetas de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-500">Total Ventas</p>
            <h3 className="text-2xl font-bold">$983,410</h3>
            <p className="text-green-500 text-sm">+3.34% desde la semana pasada</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-500">Total Pedidos</p>
            <h3 className="text-2xl font-bold">58,375</h3>
            <p className="text-red-500 text-sm">-2.89% desde la semana pasada</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-500">Visitantes</p>
            <h3 className="text-2xl font-bold">237,782</h3>
            <p className="text-green-500 text-sm">+8.02% desde la semana pasada</p>
          </div>
        </div>

        {/* Gráfico de ingresos filtrado */}
        <div className="bg-white shadow-lg p-6 rounded-lg mt-6 border-l-4 border-orange-500">
          <h3>Ingreso Diario</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#FF5722" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <SearchBar onSearch={setSearchQuery} />

        {/* Tabla de categorías */}
        <div className="bg-white shadow-lg p-6 rounded-lg mt-6 border-l-4 border-orange-500">
         <h3 className="text-xl font-bold text-gray-700">Top Categorías</h3>
        <table className="w-full mt-4 border-collapse">
            <thead>
                <tr className="bg-gray-200">
                    <th className="p-3 text-left">Categoría</th>
                    <th className="p-3 text-right">Ventas</th>
                    <th className="p-3 text-center">Fecha</th>
                    <th className="p-3 text-center">Crecimiento (%)</th>
                    <th className="p-3 text-center">Estado</th>
                    <th className="p-3 text-center">Responsable</th>
                </tr>
            </thead>
            <tbody>
                {filteredCategories.map((item) => (
                    <tr key={item.id} className="border-b">
                        <td className="p-3">{item.title}</td>
                        <td className="p-3 text-right">${item.sales.toLocaleString()}</td>
                        <td className="p-3 text-center">{item.date}</td>
                        <td className={`p-3 text-center ${item.growth >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {item.growth}%
                        </td>
                        <td className="p-3 text-center">
                            <span className={`px-2 py-1 rounded ${item.status === "Completado" ? "bg-green-500 text-white" : item.status === "Pendiente" ? "bg-yellow-500 text-white" : "bg-gray-500 text-white"}`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="p-3 text-center">{item.assignedTo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      </main>
    </div>
  );
};

export default Dashboard;
