import { FaHome, FaBox, FaShoppingCart, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <aside className="w-64 bg-orange-500 text-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold">Menú</h2>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-200"><FaHome /> Inicio</li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-200"><FaBox /> Productos</li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-200"><FaShoppingCart /> Pedidos</li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-200"><FaCog /> Configuración</li>
      </ul>
      <button 
        className="mt-6 flex items-center gap-2 bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
        onClick={onLogout}
      >
        <FaSignOutAlt /> Cerrar sesión
      </button>
    </aside>
  );
};

export default Sidebar;
