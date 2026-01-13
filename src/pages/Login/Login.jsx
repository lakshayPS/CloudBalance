import CloudKeeper from "../../assets/CloudKeeper.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../services/authServices";
import { loginSuccess } from "../../actions";
import { toast } from "react-toastify";
import { ROLE_ROUTES } from "../../constants/roleRoutes";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.auth?.token);
  const role = useSelector((state) => state?.auth?.role);

  useEffect(() => {
    if (token && role) {
      navigate(ROLE_ROUTES[role] || "/dashboard", { replace: true });
    }
  }, [token, role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        email: userEmail,
        password: userPassword,
      });

      const { token, tokenType, email, role, userName } = response.data;

      dispatch(
        loginSuccess({
          token,
          tokenType,
          email,
          role,
          userName,
        })
      );

      toast.success("Login successful");

      navigate(ROLE_ROUTES[role] || "/dashboard", { replace: true });
    } catch {
      toast.error("Invalid Credentials");
    }
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
