import React, { useState } from "react";
import Modal from "./Modal";
import InputNormal from "./InputNormal";
import DepartmentSelect from "./DepartmentSelect";
import { toast } from "react-toastify";
import userService from "../services/userService";

interface UserModalProps {
    onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose }) => {

    const [code, setCode] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState<string>();
    const [department, setDepartment] = useState<string>();

    async function handleSubmit() {
        toast.promise(
            userService.createUser({
                code, name, email, userDepartmentId: department
            }),
            {
                pending: "Criando usuário...",
                success: `${name} criado!`,
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                }
            }
        ).then(onClose);
    }

    return (
        <Modal
            title="Dados do Usuário"
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <InputNormal
                label="Código"
                value={code}
                type="number"
                min={0}
                onChange={(e) => setCode(Number(e.target.value))}
                required
            />
            <InputNormal label="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
            <InputNormal label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
            <DepartmentSelect department={department} setDepartment={setDepartment} />
        </Modal>
    );
};

export default UserModal;