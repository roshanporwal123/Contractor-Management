import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "", email: "", password: "", phone: "", role: "customer",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(""); setMsg("");
    try {
      const res = await api.post("/auth/register", form);
      setMsg(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <select name="role" value={form.role} onChange={onChange}>
          <option value="customer">Customer</option>
          <option value="contractor">Contractor</option>
        </select>
        <input name="name" placeholder="Full name" onChange={onChange} required />
        <input name="email" type="email" placeholder="Email" onChange={onChange} required />
        <input name="phone" placeholder="Phone" onChange={onChange} />
        <input name="password" type="password" placeholder="Password" onChange={onChange} required />
        <button type="submit">Register</button>
      </form>
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;