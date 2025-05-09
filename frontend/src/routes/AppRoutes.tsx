import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kanban from "../pages/Kanban";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
