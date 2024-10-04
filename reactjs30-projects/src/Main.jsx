import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ReactDOM from 'react-dom';

const Main = () => {
  return (
    <div>
        <BrowserRouter>
        <App />
        </BrowserRouter>
   
    </div>
  )
}

export default Main