import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Products from "./Products";

const products = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img: "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
function UseParams() {
  return (
    <div className="App pt-20">
      <h1>React Router useParams Hook Demo</h1>
      <div className="navbar">
        <Link to="/products">Products</Link>
      </div>
      <div>
      <Routes>
        <Route path="/about" element={<Products  product={products}/>} />
      </Routes>
      </div>
    </div>
  );
}

export default UseParams;
