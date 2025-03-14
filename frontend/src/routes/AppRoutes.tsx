import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kanban from "../pages/Kanban";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
