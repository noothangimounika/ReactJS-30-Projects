
import './App.css';

import React from 'react'
import HelloWorld from './Components/HelloWorld';
import CounterApp from './Components/CounterApp';
import RealTimeInput from './Components/RealTimeInput';
import ListComponent from './Components/ListComponent';
import ToggleSwitch from './Components/ToggleSwitch';
import FetchData from './Components/FetchData';


const App = () => {
  return (
    <div>
      <HelloWorld />
      <CounterApp />
      <RealTimeInput />
      <ListComponent />
      <ToggleSwitch />
      <FetchData />
    </div>
  )
}

export default App
