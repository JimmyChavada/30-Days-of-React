import './App.css';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BrowserRouter from "./BrowserRouter"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter />
      <Footer /> 
    </div>
  );
}

export default App;
