
import './App.css';
import {Route , Routes} from "react-router-dom";
import Weather from "./weather/Weather"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Weather/>}/>
      </Routes>
    </div>
  );
}

export default App;
