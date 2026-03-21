import React from "react";

const QueueDisplay = ({
updateQueueStatus,
removeFromQueue ,
  queuedata = [], // ✅ always array
}) => {

  const getStatusColour = (status) => {
    switch (status) {
      case "waiting":
        return "bg-blue-500";
      case "in-service":
        return "bg-green-500";
      case "completed":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };
   console.log("Queue Data:", queuedata); // ✅ log the data to check its structure  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Queue Display</h2>
 
      {queuedata.length === 0 ? (
        <p className="text-gray-600">No customers in the queue</p>
      ) : (
        <ul className="space-y-4">
          {queuedata.map((item, index) => (
            <li
              key={index}
              className={`p-4 rounded text-white ${getStatusColour(item.status)}`}
            >
              <p>Name: {item.name}</p>
              <p>Status: {item.status}</p>
              <p>Service: {item.service}</p>

              <div className="flex gap-2 mt-2">
                <button
                    onClick={() => updateQueueStatus(item.id)}
                  className="bg-blue-500 px-2 py-1 rounded"
                >
                  Update
                </button>

                <button
                  onClick={() => removeFromQueue(item.id)}
                  className="bg-red-500 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueueDisplay;