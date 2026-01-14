import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Portifolio from "./Pages/Portifolio";
import Layout from "./Layout";

const App = () => {
    return (

        <Routes>
            
            <Route path="/" element={<Layout />}>
            
                <Route index element={<Home />} />

                <Route path="projetos" element={<Portifolio />} />

                <Route path="*" element={<Navigate to="/" />} />

            </Route>

        </Routes>
    );
}

export default App;