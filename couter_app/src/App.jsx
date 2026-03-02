import  "./index.css";
import { useState } from "react";



export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
 <div className="h-screen w-screen flex flex-col items-center justify-center gap-8 bg-gray-100">

      {/* Title */}
      <h1 className="text-4xl font-bold">Counter App your {count}</h1>

      {/* Counter Circle */}
      <div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
        <span className="text-4xl font-bold text-white">{count}</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => setCount((count) => Math.max(0, count - 1))}
          className="px-6 py-2 bg-red-500 text-white rounded-xl shadow-md hover:scale-105 transition"
        >
          Decrease
        </button>


        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:scale-105 transition"
        >
          Increase
        </button>
        
  
        <button
          onClick={() => setCount((count)=>setCount(0))}
          className="px-6 py-2 bg-red-500 text-white rounded-xl shadow-md hover:scale-105 transition"
        >
          Reset
        </button>
      </div>

      <div className="text-sm text-gray-500 mt-4">
      <input type="text" placeholder="Enter your count" 
      value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="px-4 py-2 border-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button onClick={() => setCount(Number(inputValue))}

     className="ml-2 px-4 py-2 bg-gray-300 font-bold text-gray-700 rounded-lg hover:bg-gray-400 transition">Set Count to {inputValue}</button>

    
    </div>
    </div>
    </>
  
    
  );
}