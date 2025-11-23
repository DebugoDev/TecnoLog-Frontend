import React, { useEffect, useState } from "react";
import ColorLogo from "../assets/images/logo-colorida.png";
import InputNormal from "./InputNormal";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { IUser } from "../services/userService";
import userService from "../services/userService";

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) return;

        if (password != confirmPassword) {
            toast.error("A senha e a confirmação precisam ser iguais!");
            setPassword("");
            setConfirmPassword("");
            return;
        }

        toast.promise(
            userService.CompleteUserRegistration(token, { userPassword: password }),
            {
                pending: "Registrando...",
                success: "Usuário cadastrado!",
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                }
            }
        ).then(() => navigate("/login"));
    };

    const handleUser = async () => {
        if (!token) return;

        const response = await userService.getRegisteringUser(token);
        setUser(response);
    }

    useEffect(() => {
        handleUser();
    }, [token])

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#F8F9FA] w-lg p-10 min-w-1/4 h-4/7 flex flex-col gap-7 items-center justify-center rounded-br-[20px] rounded-bl-[100px] rounded-tl-[20px] rounded-tr-[100px] shadow-xl m-5"
        >
            <img src={ColorLogo} alt="Logo" className="w-2/3 mb-5" />
            <div className="flex flex-col items-center w-full">
                <h3 className="text-2xl font-bold text-[#1f3449]">
                    Completar cadastro
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">
                        {user?.name}
                    </span>
                    <span className="text-sm text-gray-500">
                        {user?.email}
                    </span>
                </div>
            </div>
            <InputNormal
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <InputNormal
                label="Confirmar senha"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <span className="text-sm text-gray-500 text-center">
                *   Ao clicar em confirmar você criará uma conta no TecnoLog com esse e-mail e senha.
            </span>
            <button
                type="submit"
                className="w-1/2 h-13 text-white rounded-[15px] border-none shadow-lg bg-[#1f3449] hover:bg-[#175476] transition-colors duration-200"
            >
                Confirmar
            </button>
        </form>
    );
};

export default RegisterForm;
