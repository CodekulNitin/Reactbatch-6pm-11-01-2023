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
import Products from "./components/ReactRouter/UseParamas/Products";
import ProfilePage from "./components/ReactRouter/UseParamas/ProfilePage";

// https://www.freecodecamp.org/news/avoid-prop-drilling-with-react-context-api/
function App() {
  return (
    <div className="App">
      <ProfilePage className="mt-32" />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    
    </div>
  );
}

export default App;
