
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import LoginForm from './AuthenticationForm/LoginForm';
import RegisterForm from './AuthenticationForm/RegisterForm';

const App = () => {
  return (
    <div>
       <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
