import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Stock from "../pages/Stock/Stock";
import Login from "../pages/Stock/Login";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Stock />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};


export default AppRoutes;