 import { useState } from 'react';
 import { FaUserPlus } from 'react-icons/fa6';
 
 
 export default function Queueform({onAdd}) {
    const [name ,setname] = useState('');
    const [services ,setservices] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === '' || services.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        onAdd(name,services);
        setname('');
        setservices('');
    }
  return (
    <div className="Queueform">
     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input 
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setname(e.target.value)}
    className="border p-2 rounded"  
    />

 <select value={services} onChange={(e) => setservices(e.target.value)} className="border p-2 rounded">
    <option value="">Select a service</option>
    <option value="consultations">consultations</option>
    <option value="Support">Support</option>
    <option value="help">help</option>
 </select>

 <button type="submit" className="bg-blue-500 justify-center aling-center flex gap-2 text-white p-2 rounded"><FaUserPlus /> Add Customer</button>

</form>
    </div>
  );
}