import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Welcome, {user.name}</h2>
      <p>Role: <b>{user.role}</b></p>
      {user.role === "admin" && <p>Admin panel yahan aayega.</p>}
      {user.role === "contractor" && <p>Contractor dashboard yahan aayega.</p>}
      {user.role === "customer" && <p>Customer dashboard yahan aayega.</p>}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;