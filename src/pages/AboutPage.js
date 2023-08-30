import React from "react";
import About from "../common/About";

const AboutPage = ({ aboutRef }) => {
    return (
        <div className="about__content">
            <About aboutRef={aboutRef} />
        </div>
    );
}

export default AboutPage;
