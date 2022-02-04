import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';

function App() {
  return (
    <>
      <header>
        <Link to="/">
       <img src="https://img.icons8.com/material/64/000000/back--v1.png" alt="img-icon"/>
       </Link>
        <div>
      <img src="https://img.icons8.com/material/64/000000/microphone--v1.png" alt="img-icon"/>
      <img src="https://img.icons8.com/ios-filled/64/000000/settings.png" alt="img-icon"/>
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
