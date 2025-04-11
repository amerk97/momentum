import { useEffect, useState } from "react";
import { fetchWeatherForecast } from "../utils/api";

// For testing the weather forecast API demo from .NET

const WeatherTest = () => {
    const [forecast, setForecast] = useState<any[]>([]);

    useEffect(() => {
        fetchWeatherForecast()
            .then((data) => {
                setForecast(data);
            })
            .catch((error) => {
                console.error("Error fetching weather forecast:", error);
            });
    }, []);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather Forecast</h2>
                <ul className="space-y-3">
                    {forecast.map((item) => (
                    <li
                        key={item.date}
                        className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <strong className="block text-lg text-gray-700">
                            {new Date(item.date).toLocaleDateString()}
                        </strong>
                        <span className="text-gray-600">{item.summary}</span>
                        <div className="text-sm text-gray-500">
                            {item.temperatureC}°C / {item.temperatureF}°F
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
        );
};

export default WeatherTest;



