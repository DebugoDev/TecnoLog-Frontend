import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";


const App: React.FC = () => {
    return (
        <>
            <AppRoutes />
            <ToastContainer
                position="bottom-right" />
        </>
    );
};

export default App;
