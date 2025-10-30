import { Routes, Route } from "react-router-dom";
import React from "react";
import Stock from "../pages/Stock/Stock";
import Login from "../pages/Login/Login";
import Movs from "../pages/Movs/Movs";
import Users from "../pages/Users/Users";
import Production from "../pages/Production/Production";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Stock />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/movs"
                element={
                    <ProtectedRoute>
                        <Movs />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/users"
                element={
                    <ProtectedRoute>
                        <Users />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/production"
                element={
                    <ProtectedRoute>
                        <Production />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
