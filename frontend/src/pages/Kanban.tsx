import { Link } from 'react-router-dom';

const Kanban = () => {
  return (
    <div>
      <h1>Your tasks</h1>
      <p>Here be personal kanban board</p>
      
      <button>
        Click meeeee
      </button>

      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Kanban;