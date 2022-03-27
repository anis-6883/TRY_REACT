import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./utilities/auth";

function Login() {
  const [username, setUsername] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(username);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <h4 className="mt-4">Login Page</h4>
      <input
        className="form-control mt-3 mb-3"
        type="text"
        placeholder="Enter Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} className="btn btn-info">
        Login
      </button>
    </>
  );
}

export default Login;
