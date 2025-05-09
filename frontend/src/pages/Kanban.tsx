import { Link } from 'react-router-dom';

const Kanban = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your tasks</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* To Do Column */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">To Do</h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              Placeholder Task 1
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              Placeholder Task 2
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">In Progress</h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              Placeholder Task 3
            </div>
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Done</h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              Placeholder Task 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;