import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Stock from "../pages/Stock/Stock";
import Login from "../pages/Login/Login";
import Movs from "../pages/Movs/Movs";
import Users from "../pages/Users/Users";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Stock />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movs" element={<Movs />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
};


export default AppRoutes;