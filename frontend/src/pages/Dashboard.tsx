import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default Dashboard;