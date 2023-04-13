import "./App.css";
import MisRutas from "./Router/MisRutas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MisRutas />
    </BrowserRouter>
  );
}

export default App;
