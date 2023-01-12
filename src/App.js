import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/ReactRouter/About/About";
import Navbar from "./components/ReactRouter/Home/Navbar";
import HomePage from './components/ReactRouter/Home/HomePage'
import Contact from './components/ReactRouter/ContactUs/Contact'
import Gallary from './components/ReactRouter/Gallary/Gallary'
import Main from './components/form/Main'
import UseParams from "./components/ReactRouter/UseParamas/UseParams";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/gallary" element={<Main />} />

      </Routes>
    </div>
  );
}

export default App;
