import React from "react";
import type { IUser } from "../services/userService";
import Swal from "sweetalert2";
import userService from "../services/userService";

import { toast } from "react-toastify";

const UserCard: React.FC<IUser> = (user) => {

    const registerUser = async () => {
        const result = await Swal.fire({
            title: "Dar acesso",
            html: `
                Tem certeza que deseja dar acesso ao sistema TecnoLog para <b>${user.name}</b>?<br><br>
                <small style="color:#555">
                    Ao confirmar, um e-mail será enviado ao usuário e ele terá até <b>30 dias</b> para ativar a conta.
                </small>
            `,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",

            input: "select",
            inputLabel: "Selecione o nível de acesso",
            inputOptions: {
                USER: "Usuário comum",
                MANAGER: "Gestor",
                ADMIN: "Administrador",
            },
            inputValue: "USER",
        });

        if (!result.isConfirmed) return;

        toast.promise(
            userService.registerNewUser({
                userId: user.id,
                userRole: result.value
            }),
            {
                pending: "Registrando...",
                success: "E-mail enviado!",
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                }
            }
        );
    }

    const registerEmail = async () => {
        const result = await Swal.fire({
            title: "Registrar e-mail",
            html: `
                Registrar endereço de e-mail para <b>${user.name}</b>.<br><br>
                <small style="color:#555">
                    Esse será o endereço de e-mail para acesso ao sistema caso o usuário seja ativado.
                </small>
            `,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",

            input: "email",
            inputLabel: "Endereço de e-mail",
        });

        if (!result.isConfirmed) return;

        toast.promise(
            userService.updateUser({
                email: result.value
            }, user.id),
            {
                pending: "Registrando e-mail...",
                success: "Novo e-mail registrado!",
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                }
            }
        );
    }

    return (
        <div className="bg-[#f8f9fa] flex shadow-lg rounded-3xl p-5 flex-col gap-4">
            <div className="flex justify-between w-full">
                <div className="w-2/3">
                    <p className="font-bold text-lg">{user.name}</p>
                    <p className="text-md font-semibold">{user.userDepartment || "-"}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg text-lg cursor-default`}
                    style={{ backgroundColor: user.profile.color }}>
                    {user.profile.abbreviation}
                </div>
            </div>
            <div className="w-full">
                <div className="flex gap-1.5 items-center">
                    <span className="font-semibold text-md">Código do funcionário:</span>
                    <span className="text-sm font-medium">{user.code}</span>
                </div>
                <div className="flex gap-1.5 items-center">
                    <span className="font-semibold text-md">Acesso:</span>
                    {
                        user.email && user.role == "DATA"
                            ? <span className="text-sm font-medium hover:text-blue-600 hover:underline cursor-pointer" onClick={registerUser}>Dar acesso ao sistema +</span>
                            : <span className="text-sm font-medium">{user.role == "DATA" ? "-" : user.role}</span>
                    }
                </div>
                <p className="font-semibold text-md">Email</p>
                {
                    !user.email
                        ? <span className="text-sm font-medium hover:text-blue-600 hover:underline cursor-pointer" onClick={registerEmail}>Registrar email</span>
                        : <span className="text-sm font-medium">{user.email}</span>
                }
            </div>
        </div>
    );
};

export default UserCard;