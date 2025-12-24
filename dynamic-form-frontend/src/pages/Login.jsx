
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";
import { getUserRole } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      const role = getUserRole(); 

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/forms");
      }
    } catch (err) {
      alert("Invalid credentials");
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 hover:underline font-medium"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
