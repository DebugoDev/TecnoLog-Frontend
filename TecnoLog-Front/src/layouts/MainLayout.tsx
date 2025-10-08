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
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={title} userName={userName} userEmail={userEmail} />
        <main className="flex-1 p-6 overflow-y-auto bg-[#ededed]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
