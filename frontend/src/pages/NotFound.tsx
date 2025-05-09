import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">404 - Not Found</h1>
            <p className="mb-4 text-gray-600">
            The page you are looking for does not exist.
            </p>
            <Link to="/" className="text-blue-600 hover:underline">
            Go back to Dashboard
            </Link>
        </div>
        </div>
    );

};

export default NotFound;