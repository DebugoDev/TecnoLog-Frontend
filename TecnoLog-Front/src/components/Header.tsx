import React from "react";
import type { IUser } from "../services/userService";

interface HeaderProps {
    title: string;
    user?: IUser
}

const Header: React.FC<HeaderProps> = ({ title, user }) => {

    return (
        <header className="flex items-center justify-between px-12 py-6 bg-[#ededed]">
            <h1 className="text-2xl font-bold text-[#1f3449]">{title}</h1>

            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-lg cursor-default"
                    style={{ backgroundColor: user?.profile.color }}>
                    {user?.profile.abbreviation}
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-semibold">{user?.name}</span>
                    <span className="text-gray-500 text-sm">{user?.email}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
