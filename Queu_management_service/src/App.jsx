import { useState } from "react";
import "./index.css";
import Queueform from "../src/Components/Queueform";
import QueueDisplay from "../src/Components/QueueDisplay";

export default function App() {
  const [queueData, setQueueData] = useState([]);
   console.log("Initial Queue Data:", queueData); // ✅ log initial state to verify it's an array
  const addtoQueue = (name, service) => {
    setQueueData([
      ...queueData,
      { id: Date.now(), name, status: "waiting", service },
    ]);
  };

  const updateQueueStatus = (id) => {
    const statusFlow = ["waiting", "in-service", "completed"];

    setQueueData(
      queueData.map((entry) => {
        if (entry.id === id) {
          const nextStatus =
            statusFlow[(statusFlow.indexOf(entry.status) + 1) % statusFlow.length];
          return { ...entry, status: nextStatus };
        }
        return entry;
      })
    );
  };

  const removeFromQueue = (id) => {
    setQueueData(queueData.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide">
          🚀 Queue Management
        </h1>
        <p className="mt-2 text-gray-300">
          Manage customers smoothly & efficiently
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Form Card */}
        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-4">➕ Add Customer</h2>
          <Queueform onAdd={addtoQueue} />
        </div>

        {/* Queue Display Card */}
        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-4">📋 Current Queue</h2>

          <QueueDisplay
            queuedata={queueData}
            updateQueueStatus={updateQueueStatus}
            removeFromQueue={removeFromQueue}
          />
        </div>
      </div>

    </div>
  );
}