import React, { useState } from "react";
import ColorLogo from "../assets/images/logo-colorida.png";
import InputNormal from "./InputNormal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        toast.promise(
            login(email, password),
            {
                pending: "Autenticando...",
                success: "Login realizado!",
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        setError(msg);
                        return msg;
                    },
                },
            }
        ).then(() => navigate("/users"));
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-1/2 h-13 text-white rounded-[15px] border-none shadow-lg bg-[#1f3449] hover:bg-[#175476] transition-colors duration-200"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
