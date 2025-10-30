import React, { useState } from "react";
import ColorLogo from "../assets/images/logo-colorida.png";
import InputNormal from "./InputNormal";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setError("");

        toast.promise(
            authService.login({ email: username, password }),
            {
                pending: "Logando...",
                success: "Usuário autenticado!",
                error: {
                    render({ data }: any) {
                        const message = data?.detail || data?.message;
                        setError(message);

                        return message;
                    },
                }
            }
        ).then((res) => {
            localStorage.setItem("token", res.token);
            navigate("/");
        })
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#F8F9FA] w-lg min-w-1/4 h-4/7 flex flex-col gap-7 items-center justify-center rounded-br-[20px] rounded-bl-[100px] rounded-tl-[20px] rounded-tr-[100px] shadow-xl m-5"
        >
            <img src={ColorLogo} alt="Logo" className="w-2/3 mb-5" />
            <InputNormal
                label="E-mail"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <InputNormal
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {error && <span className="text-red-500 text-sm">{error}</span>}

            <button
                type="submit"
                className={"w-1/2 h-13  text-white rounded-[15px] border-none shadow-lg bg-[#1f3449] hover:bg-[#175476] transition-colors duration-200"}
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;   