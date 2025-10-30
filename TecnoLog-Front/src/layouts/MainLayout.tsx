import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useUser } from "../hooks/useUser";

interface MainLayoutProps {
    children: React.ReactNode;
    title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    const { user } = useUser();

    return (
        <div className="relative h-screen">
            <Sidebar />
            <div className="ml-16 flex flex-col h-full transition-all duration-300">
                <Header title={title} user={user} />
                <main className="flex-1 p-6 overflow-y-auto bg-[#ededed]">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
