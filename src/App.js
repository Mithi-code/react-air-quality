import  Details  from './Components/Details';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src="https://img.icons8.com/material/64/000000/back--v1.png"/>
        <div>
      <img src="https://img.icons8.com/material/64/000000/microphone--v1.png"/>
      <img src="https://img.icons8.com/ios-filled/64/000000/settings.png"/>
      </div>
      </header>
      <div className='App'>
        <h1>List Of Countries</h1>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Details />} path="/details" />
      </Routes>
      </div>
    </>
  );
}

export default App;
