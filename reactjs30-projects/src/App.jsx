
import './App.css';

import React from 'react'
import HelloWorld from './Components/HelloWorld';
import CounterApp from './Components/CounterApp';
import RealTimeInput from './Components/RealTimeInput';
import ListComponent from './Components/ListComponent';
import ToggleSwitch from './Components/ToggleSwitch';
import FetchData from './Components/FetchData';
import CalculatorApp from './Components/CalculatorApp';
import TimerApp from './Components/TimerApp';
import ToDoList from './Components/ToDoList';
import DynamicBackground from './Components/DynamicBackground';
import FirstPage from './Components/rounting/FirstPage';
import SecondPage from './Components/rounting/SecondPage';
import ThirdPage from './Components/rounting/ThirdPage';
import FourthPage from './Components/rounting/FourthPage';
import { Routes,Route } from 'react-router-dom';
import RandomQuoteGenerator from './Components/RandomQuoteGenerator';
import FileUploader from './Components/FileUploader';



const App = () => {
  return (

    <div>

      {/* <Routes>
          <Route path='/abc' element={<FirstPage />} />
          <Route path='/xyz' element={ <SecondPage />} />

          
      </Routes> */}
      
      {/* <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage /> */}
      {/* <RandomQuoteGenerator /> */}


      {/* <HelloWorld />
      <CounterApp />
      <RealTimeInput />
      <ListComponent />
      <ToggleSwitch />
      <FetchData /> */}

      <CalculatorApp />
      <TimerApp />
      <ToDoList />
      <DynamicBackground />
      <RandomQuoteGenerator />
      <FileUploader />
    </div>
  )
}

export default App
