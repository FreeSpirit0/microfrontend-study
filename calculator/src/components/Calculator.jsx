import React, { useState } from 'react'

const Calculator = () => {
  const [leftNumber, setLeftNumber] = useState(0)
  const [rightNumber, setRightNumber] = useState(0)
  const [operation, setOperation] = useState("+")

  const calculateResult = (op) => {
    if (op == "+") {
      return leftNumber + rightNumber
    }
    else if (op == "-") {
      return leftNumber - rightNumber
    }
    else if (op == "*") {
      return leftNumber * rightNumber
    }
    else if (op == "/") {
      return leftNumber / rightNumber
    }
    else {
      return 0
    }
  }

  return (
    <div className='w-[50%] flex flex-col gap-4 p-10'>
      <h1 className='text-2xl text-bold text-gray-700'>Calculator</h1>
      <div className='flex gap-4'>
        <input className='w-[25%] border border-black rounded-md p-2' onChange={e => setLeftNumber(parseInt(e.target.value))} placeholder={leftNumber}></input>
        <input className='w-[10%] border border-blue-300 rounded-md p-2' onChange={e => setOperation(e.target.value)} placeholder={operation}></input>
        <input className='w-[25%] border border-black rounded-md p-2' onChange={e => setRightNumber(parseInt(e.target.value))} placeholder={rightNumber}></input>
        <div className='flex justify-center gap-2 p-2'>
          <span>=</span>
          <span className='overflow-hidden'>{calculateResult(operation)}</span>
        </div>
      </div>
    </div>
  )
}

export default Calculator