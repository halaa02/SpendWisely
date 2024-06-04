import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import FeaturePage from "./pages/feature";
import AboutUs from "./pages/aboutUs";
import Dashboard from "./pages/dashboard";
import Test from "./pages/test";
import Test2 from "./pages/test2";
import Test4 from "./pages/test4";
import Test5 from "./pages/test5";
import Test6 from "./pages/test6";
import Test7 from "./pages/test7";
import Debt from "./pages/debt";
import Report from "./pages/report";



function App() {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="feature" element={<FeaturePage />} />
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="test" element={<Test />} />
        <Route path="test2" element={<Test2 />} />
        <Route path="test4" element={<Test4 />} />
        <Route path="test5" element={<Test5 />} />
        <Route path="test6" element={<Test6 />} />
        <Route path="test7" element={<Test7 />} />
        <Route path="debt" element={<Debt />} />
        <Route path="report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
