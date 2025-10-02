import React from "react";

interface HeaderProps {
    title: string;
    userName: string;
    userEmail: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName, userEmail }) => {
    return (
        <header className="flex items-center justify-between px-12 py-6 bg-[#ededed]">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#1f3449] flex items-center justify-center text-white font-semibold shadow-lg">
                    {userName
                        .split(" ")
                        .filter((n) => n.length > 0)
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-semibold">{userName}</span>
                    <span className="text-gray-500 text-sm">{userEmail}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
