import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home className="home" />
    </Router>
  );
}

export default App;
