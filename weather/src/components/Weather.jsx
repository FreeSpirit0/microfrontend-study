import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Weather = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/weather').then(
      res => setWeather(res.data)
    )
  }, [])

  if (weather == null) return <></>
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-3xl'>Weather Today</h1>
      <h2 className='text-2xl'>⛅</h2>
      <h2>Temperature: {weather.temperature} {weather.unit}</h2>
    </div>
  )
}

export default Weather