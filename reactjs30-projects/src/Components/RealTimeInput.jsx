import React,{useState} from 'react'

const RealTimeInput = () => {
    const [inputValue,setInputValue]=useState('');

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

  return (
    <div className='RealTimeInput-Container'>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Real-Time Input Form</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
        style={{ padding: '10px', width: '250px' ,border:' 2px rgb(17, 45, 202) solid',borderRadius:'10px'}}
      />
      <h3>Output: {inputValue}</h3>
    </div>
    </div>
  )
}

export default RealTimeInput