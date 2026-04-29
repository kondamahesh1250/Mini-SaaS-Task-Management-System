import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TaskManager</h1>

      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login" className="text-gray-600 hover:text-blue-500">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-blue-500"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}