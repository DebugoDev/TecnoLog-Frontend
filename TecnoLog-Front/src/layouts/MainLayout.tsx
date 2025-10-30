import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface MainLayoutProps {
    children: React.ReactNode;
    title: string;
    userName: string;
    userEmail: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, userName, userEmail }) => {
    return (
        <div className="relative h-screen">
            <Sidebar />
            <div className="ml-16 flex flex-col h-full transition-all duration-300">
                <Header title={title} userName={userName} userEmail={userEmail} />
                <main className="flex-1 p-6 overflow-y-auto bg-[#ededed]">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
