import { Link } from 'react-router-dom';
import WeatherTest from '../components/Weathertest';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Momentum!</p>
      
      <button>
        Click me
      </button>

      <nav>
        <Link to="/kanban">Your tasks</Link>
      </nav>

      <WeatherTest />
    </div>
  );
};

export default Dashboard;