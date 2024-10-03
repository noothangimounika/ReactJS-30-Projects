import React,{useState} from 'react'

const CounterApp = () => {
    const [number,setNumber]=useState(0);

    const increament=() =>{
        setNumber(number +1);
    }
    const decrement=() =>{
        if(number >0){
            setNumber(number -1);
            
        }
      
    }
    const reset=() =>{
        setNumber(0);

    }
  return (

    <div className='CounterApp-Container'>
        <h2>Counter App</h2>
        <h1>{number}</h1>
        <button onClick={increament}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterApp