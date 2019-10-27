import React from "react";

import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

const Container = () => (
    <div className="container">
        <Header />
        <About />
        <Skills />
        <Contact />
    </div>
);

export default Container;