import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";


import Service from "./Service";
import Master from "./Layout/Master";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
    
     
        <Route path="/service" element={<Service />} />
        </Route>
   
      </Routes>
    </BrowserRouter>
  );
};

export default App;