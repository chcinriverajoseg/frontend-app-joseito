/*import { useState } from "react";
import api from "@/api/axios";


import { useNavigate } from "react-router-dom";

// 👉 URL correcta del backend
const API = "http://localhost:4000/api/auth";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    interests: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registro disparado ✔");

    let formattedInterests =
      form.interests.split(",").map((i) => i.trim());

    try {
      const res = await axios.post(`${API}/register`, {
        ...form,
        interests: formattedInterests,
      });

      console.log("Registrado:", res.data);
      navigate("/login");
    } catch (error) {
      console.error("Error Registro:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Registro</h2>

        <input
          name="name"
          placeholder="Nombre"
          className="w-full p-2 border rounded mb-3"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          className="w-full p-2 border rounded mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded mb-3"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="interests"
          placeholder="Intereses (separados por coma)"
          className="w-full p-2 border rounded mb-3"
          value={form.interests}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}*/


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import Input from "@/ui/Input";
import Button from "@/ui/Button";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    interests: ""
  });

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");

      const sendData = {
        ...form,
        interests: form.interests.split(",").map(i => i.trim()),
      };

      await api.post("/register", sendData);

      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Error al registrar. Inténtalo de nuevo.");
    }
  };

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Crear cuenta</h1>

      {error && <p className="text-red-500">{error}</p>}

      <Input label="Nombre" value={form.name} onChange={e => updateField("name", e.target.value)} />
      <Input label="Email" value={form.email} onChange={e => updateField("email", e.target.value)} />
      <Input label="Contraseña" type="password" value={form.password} onChange={e => updateField("password", e.target.value)} />
      <Input label="Intereses (separados por coma)" value={form.interests} onChange={e => updateField("interests", e.target.value)} />

      <Button className="w-full mt-4" onClick={handleRegister}>
        Registrarme
      </Button>
    </div>
  );
}

