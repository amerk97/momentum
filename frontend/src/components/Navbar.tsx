import { Link, useLocation } from "react-router-dom";

// Simple Navbar component 

const Navbar = () => {
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/": "Dashboard",
    "/kanban": "Kanban",
    "/login": "Login",
  };

  const currentPage = pageTitles[location.pathname] || "Dashboard";

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Momentum / {currentPage} </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/kanban" className="text-white hover:text-gray-300">
              Kanban
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

