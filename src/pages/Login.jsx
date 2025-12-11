/*import { useState } from "react";
import api from "@/api/axios";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit ejecutado ✔");

    setErrorMsg("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      console.log("Respuesta login:", res.data);

      // Guardar usuario/token en contexto
      loginUser(res.data.user, res.data.token);

      navigate("/explore");
    } catch (err) {
      console.log("Error login:", err);

      setErrorMsg(err.response?.data?.message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>

        {errorMsg && <p className="text-red-500 text-center mb-3">{errorMsg}</p>}

        <label className="block mb-3">
          <span>Email</span>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          <span>Contraseña</span>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Ingresando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import { useUserContext } from "@/context/UserContext";
import Input from "@/ui/Input";
import Button from "@/ui/Button";

export default function Login() {
  const { updateUserContext } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      const res = await api.post("/login", { email, password });

      localStorage.setItem("token", res.data.token);
      updateUserContext(res.data.user);

      navigate("/explore");
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>

      {error && <p className="text-red-500">{error}</p>}

      <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <Button className="w-full mt-4" onClick={handleLogin}>
        Entrar
      </Button>
    </div>
  );
}
