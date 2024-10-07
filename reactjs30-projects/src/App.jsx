
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

import RandomQuoteGenerator from './Components/RandomQuoteGenerator';
import FileUploader from './Components/FileUploader';

import { BrowserRouter,Link,NavLink,Routes,Route } from 'react-router-dom';
import About from './rountingPages/About';
import Home from './rountingPages/Home';
import Contact from './rountingPages/Contact';
import User from './rountingPages/User';
import Courses from './rountingPages/Courses';
import NavBar from './rountingPages/NavBar';
import Weather from './WeatherAppComponents/Weather';
import SearchBar from './SearchBarComponents/SearchBar';
import ChatApp from './Real-timeChatAppComponent/ChatApp';
import DragAndDropList from './Drag-and-DropComponent/DragAndDropList';
import ImageCarousel from './ImageCarouseComponet/ImageCarouse';
import MultiForm from './Multi-StepFormComponent/MutliForm';
import Pagination from './PaginationComponent/Pagination';
import ColorPicker from './ColourPickerComponent/ColourPicker';
import NavigationMenu from './NavigationMenuComponent/NavigationMenu';



const App = () => {
  return (

    <div>

      {/* <BrowserRouter>
        <NavBar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Courses' element={<Courses />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/User' element={<User />}></Route>

      </Routes>
      </BrowserRouter> */}
      
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

      {/* <CalculatorApp />
      <TimerApp />
      <ToDoList />
      <DynamicBackground />
      <RandomQuoteGenerator />
      <FileUploader /> */}

      

        {/* <Weather />
        <SearchBar /> */}


        

        {/* <DragAndDropList /> */}

        {/* <ChatApp />
        <ImageCarousel />
        <MultiForm /> */}
        {/* <Pagination /> */}
        {/* <ColorPicker /> */}
         <NavigationMenu />
    </div>
  )
}

export default App
