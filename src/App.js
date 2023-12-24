import './App.css';
import WebsiteLayout from './Pages/Website/Include/WebsiteLayout'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <WebsiteLayout/>
      </Router>
    </>
  );
}

export default App;
