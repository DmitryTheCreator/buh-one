import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Start from "./pages/Start";


function App() {
    return (
        <div className="layout">
            <Header /> 
            <div className="content">
                <Routes>
                    <Route path="/" element={<Start />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
