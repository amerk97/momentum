import { Link } from 'react-router-dom';
import WeatherTest from "../components/Weathertest";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Momentum!</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Overview Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Overview</h2>
          <p className="text-gray-600">Hi, USER!</p>
          <p className="text-gray-600">Current Time: {new Date().toLocaleTimeString()}</p>
          <p className="text-gray-600">Pending Tasks: X</p>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Stats</h2>
          <p className="text-gray-600">Completed Tasks: Y</p>
          <p className="text-gray-600">Tasks in Progress: Z</p>
          <p className="text-gray-600">Total Tasks: W</p>
        </div>
      </div>

      {/* API Test Section */}
      <WeatherTest />
    </div>
  );
};

export default Dashboard;