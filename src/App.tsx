import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs";

function App() {
  //return <Home></Home>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route element={<AboutUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
