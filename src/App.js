import { Details } from './Components/Details';
import Home from './Components/Home';
import Detail from './Redux/Detail';
import { Homee } from './Redux/Homee';


function App() {
  return (
    <>
      <header>
        <h1>Air Quality Index</h1>
        <ul className="list-none">
          <li>
           Home
          </li>
          <li>
           Details
          </li>
        </ul>
      </header>
      <div className="App">
       <Home />
       <Details />
       <Detail />
      </div>
    </>
  );
}

export default App;