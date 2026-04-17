import { useState } from 'react'

import './App.css'
import BasicProp from './components/BasicProp.jsx'
import ChildrenProp from "./components/ChildrenProp.jsx"
import RefProps from "./components/RefProps.jsx"
import CompleteProp from "./components/CompleteProp.jsx"
import Themetoggler from "./components/Themetoggler.jsx"


function Navigation() {

  const isDarkMode = true
  const section=[
{id: 'basic', label: 'Basic Prop', icon: '🔹'},
    {id: 'ref', label: 'ref Prop', icon: '🔗'},
    {id: 'children', label: 'children Prop', icon: '🌿'},
    {id: 'complete', label: 'Complete Prop', icon: '✅'},
    {id: 'theme', label: 'Theme Toggler', icon: '🌓'},
  ]
  return <nav className={`sticky top-0 z-50 shadow-mid`}></nav>;
}

function Appcontent() {
  return 
  (
  <>

  <div className={`min-h-screen bg-gray-100 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

      </>
      )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

 <div className="App flex flex-row gap=10 items-center justify-center min-h-screen bg-gray-100 ">
    <h1 className="text-4xl font-bold bg-blue-400 mb-8">React Props Management</h1>
    <div className="flex flex-col gap-6">
      <BasicProp />
      <RefProps />
      <ChildrenProp />
      <CompleteProp />
      <Themetoggler />
    </div>
  </div>
    </>
  )
}

export default App
