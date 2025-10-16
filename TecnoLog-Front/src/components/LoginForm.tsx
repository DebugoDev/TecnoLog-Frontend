import React from "react";
import ColorLogo from "../assets/images/logo-colorida.png"
import InputNormal from "./InputNormal";

const LoginForm: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] w-1/4 h-4/7 flex flex-col gap-7 items-center justify-center rounded-br-[20px] rounded-bl-[100px] rounded-tl-[20px] rounded-tr-[100px] shadow-xl">
        <img src={ ColorLogo } alt="" className="w-2/3 mb-10"/>
        <InputNormal placeholder="Email"/>
        <InputNormal placeholder="Senha"/>
        <button
            className="w-1/2 h-13 bg-[#1f3449] text-white rounded-[15px] hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
    >Login</button>
    </div>
  );
};

export default LoginForm;