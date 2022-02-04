import Details from './Components/Details';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
       <Link to="/">
       <img src="https://img.icons8.com/material/64/000000/back--v1.png"/>
       </Link> 
        <div>
      <img src="https://img.icons8.com/material/64/000000/microphone--v1.png"/>
      <img src="https://img.icons8.com/ios-filled/64/000000/settings.png"/>
      </div>
      </header>
      <div className="App">
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Details />} path="/details/:name" />
      </Routes>
      </div>
    </>
  );
}

export default App;
