import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes';

function App() {
  
  const [count, setCount] = useState(0)

  return (
  <>
   <div className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
   Tailwind v3 is working
   </div>

   <AppRoutes />
  </>
  );
}

export default App
