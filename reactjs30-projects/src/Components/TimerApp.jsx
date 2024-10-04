// import { red } from '@mui/material/colors';
// import React, { useEffect, useRef, useState } from 'react'

// const TimerApp = () => {

//     const [timer,setTimer]=useState("00:00:00");
//     const Ref=useRef()


//     function getTimeRemaining(e){
//         const total =Date.parse(e)-Date.parse(new Date())
//         const hour=Math.floor((total(1000 * 60 * 60))%24);
//         const minute=Math.floor((total/1000/60)%60)
//         const seconds=Math.floor((total/1000)%60);

//         return {total,hour,minute,seconds};
//     }

//     function startTimer(e){
//         let {total, hour, minute, seconds}=getTimeRemaining(e);
//         if(total >=0){
//             setTimer(
//                 (hour > 9 ?  hour : '0' + hour) + ':' + 
//                 (minute > 9 ? minute : '0' + minute) + ':' +
//                 (seconds > 9 ? seconds : '0' + seconds)

//             )
//         }
//     }

//     function clearTimer(e){
//         setTimer("00:00:10")
//         if(Ref.current) clearInterval(Ref.current);
//         const id =setInterval(()=>{
//             startTimer(e)
//         },1000)
//         Ref.current=id;

//     }

//     function getDeadTime(){
//         let deadline= new Date();
//         deadline.setSeconds(deadline.getSeconds() +10);
//         return deadline;
//     }
//     useEffect(()=>{
//        clearTimer( getDeadTime() )
//     },[])
     
//     function reset(){
//         clearTimer( getDeadTime() )
//     }
//   return (
//     <div className='TimerApp-Container'>
//         <h1>{timer}</h1> <br />
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default TimerApp



import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTime = () => {
    setIsRunning(true);
  };

  const stopTime = () => {
    setIsRunning(false);
  };

  const resetTime = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            if (minutes > 0 || hours > 0) {
              setMinutes((prevMinutes) => {
                if (prevMinutes > 0) {
                  return prevMinutes - 1;
                } else if (hours > 0) {
                  setHours((prevHours) => prevHours - 1);
                  return 59;
                } else {
                  return 0;
                }
              });
              return 59;
            } else {
              setIsRunning(false);
              return 0;
            }
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, hours]);

  return (
    <div className="timer-container">
        <h1 style={{fontSize:'50px'}}>Timer</h1>
      <h1>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
        placeholder="Hours"
      />
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
        placeholder="Seconds"
      />
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}

export default TimerApp;
