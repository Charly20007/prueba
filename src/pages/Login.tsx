import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import users from "../data/users";
import loginImage from "../assets/lo.jpg";


const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    const userFound = users.find(
      (user) => user.username === form.username && user.password === form.password
    );
    if (userFound) {
      setUser(userFound);
      navigate("/dashboard");
    } else alert("Credenciales incorrectas");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sección izquierda - Oculta en pantallas pequeñas */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-orange-500 text-white p-10">
        <h1 className="text-4xl font-bold">Simplifica tu gestión</h1>
        <p className="mt-4 text-lg text-center">
          Optimiza tu e-commerce con nuestro panel administrativo intuitivo.
        </p>
        <img src={loginImage} alt="Ilustración" className="mt-6 w-64 rounded-full shadow-md" />

      </div>

      {/* Sección derecha - Login */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-700">Bienvenido</h2>
          <p className="text-gray-500">Inicia sesión para continuar</p>

          <div className="mt-6">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Correo electrónico"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
              className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <a href="#" className="text-orange-500 text-sm mt-2 block">¿Olvidaste tu contraseña?</a>

            <button
              className="w-full mt-6 bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>

            <p className="mt-4 text-gray-500">O inicia sesión con</p>

            <div className="flex gap-4 justify-center mt-3">
              <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-300 transition">
                Google
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-300 transition">
                Facebook
              </button>
            </div>

            <p className="mt-6 text-gray-500">
              ¿No tienes una cuenta? <a href="#" className="text-orange-500 font-semibold">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



