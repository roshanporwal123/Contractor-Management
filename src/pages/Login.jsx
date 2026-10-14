import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("customer");
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password, role);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Login</h2>
      <div>
        {["customer", "contractor", "admin"].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            style={{ fontWeight: role === r ? "bold" : "normal" }}
          >
            {r}
          </button>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="email" placeholder="Email" required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password" placeholder="Password" required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login as {role}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p><Link to="/forgot-password">Forgot password?</Link></p>
      {role !== "admin" && <p>New here? <Link to="/register">Sign up</Link></p>}
    </div>
  );
};

export default Login;