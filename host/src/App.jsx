import { useState, Suspense } from 'react'
import { Link } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-gray-700'>Sample Super App</h1>
      <div className="card">
        <div className='flex gap-2'>
          <button className='p-2 rounded-md border border-blue-100'>
            <Link to="weather">⛅ Weather App</Link>
          </button>
          <button className='p-2 rounded-md border border-blue-100'>
            <Link to="calculator">➕➖ Calculator App</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
