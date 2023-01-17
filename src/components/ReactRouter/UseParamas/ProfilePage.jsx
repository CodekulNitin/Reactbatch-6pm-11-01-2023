import { Route, useParams, Routes, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="flex justify-between items-center p-2 bg-white rounded shadow fixed z-50 w-full">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio/1">portfolio</NavLink>
        <NavLink to="/portfolio/2/codekul">portfolio/2</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/portfolio/:id/:name" element={<Portfolio />} />
      </Routes>
      <hr />
    </div>
  );
}

const Home = () => {
  const params = useParams();
  return (
    <div className="pt-12">
      Home Page
      <div>
        <pre>params: {JSON.stringify(params)}</pre>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const params = useParams();
  console.log("name", params);

  return (
    <div className="pt-12">
      Portfolio Page
      <div>
        <pre>params: {JSON.stringify(params)}</pre>
      </div>
    </div>
  );
};
