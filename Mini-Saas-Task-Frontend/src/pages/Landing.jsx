import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-200">
      <div className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Manage Your Tasks{" "}
          <span className="text-blue-600">Efficiently 🚀</span>
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl text-lg">
          A simple and powerful multi-user task management app where you can
          create, track, and complete your daily tasks securely and efficiently.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition duration-200"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
