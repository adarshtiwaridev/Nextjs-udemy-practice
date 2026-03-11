import { useState } from 'react'
import './index.css'

 export default function App() 

{

  const [count, setCount] = useState(0);
  return (
  
  <div className="App">
  <header className='text-lg font-black'>Queue Management Service</header>
  <p>Welcome to the Queue Management Service! This application helps you manage and organize queues efficiently. </p>
   <div className=" flex flex-row justify-center gap-4 mt-3 justify-items-center">
    <h1>QueueForm</h1>
    <h2>Displayform</h2>
   </div>
  
  </div>
  );
}


