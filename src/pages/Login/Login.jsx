import { useNavigate } from "react-router";
import CloudKeeper from "../../assets/CloudKeeper.png";
import { useEffect, useState } from "react";

const Login = ({ onLogin, isAuthenticated }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userPassword", userPassword);
    onLogin();
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="w-1/3 p-8 bg-white rounded-xl shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <img src={CloudKeeper} alt="icon" className="h-16" />
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter user email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
