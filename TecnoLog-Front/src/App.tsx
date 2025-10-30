import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <AppRoutes />
                <ToastContainer position="bottom-right" />
            </UserProvider>
        </BrowserRouter>
    );
};

export default App;
