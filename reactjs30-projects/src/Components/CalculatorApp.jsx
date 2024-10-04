import React, { useState } from 'react'

const CalculatorApp = () => {

    const [value,setValue]=useState('');

  return (
    <div className='CalculatorApp-container'>
           
        <div className='CalculatorApp'>
            <form action="">
               <div className='input-display'>
               <input type="text" value={value} />
               </div>

               <div>
                <input type="button" id='form-button' value="AC" onClick={e => setValue('')} />
                <input type="button" id='form-button' value="DEL" onClick={e => setValue(String(value).slice(0, -1))} />
                <input type="button" id='form-button' value="%" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="/" onClick={e =>setValue(value + e.target.value)} />
               </div>
                
               <div>
                <input type="button" id='form-button' value="7" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="8" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="9" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="*" onClick={e =>setValue(value + e.target.value)} />
               </div>

               <div>
                <input type="button" id='form-button' value="4" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="5" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="6" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="-" onClick={e =>setValue(value + e.target.value)} />
               </div>

               <div>
                <input type="button" id='form-button' value="1" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="2" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="3" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="+" onClick={e =>setValue(value + e.target.value)} />
               </div>

               <div>
                <input type="button" id='form-button' value="00" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="0" onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="." onClick={e =>setValue(value + e.target.value)} />
                <input type="button" id='form-button' value="=" onClick={e=>setValue(eval(value))} />
           
               </div>

            </form>
        </div>

    </div>
  )
}

export default CalculatorApp