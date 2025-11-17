import React, { useState } from "react";
import Modal from "./Modal";
import InputNormal from "./InputNormal";
import DepartmentSelect from "./DepartmentSelect";
import RoleSelect from "./RoleSelect";

interface UserModalProps {
    onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose }) => {

    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("DATA");

    async function handleSubmit() {
        console.log("Código salvo!");
    }

    return (
        <Modal
            title="Dados do Usuário"
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <InputNormal label="Código" required />
            <InputNormal label="Nome" required />
            <InputNormal label="Email" />

            <DepartmentSelect department={department} setDepartment={setDepartment} />
            <RoleSelect role={role} setRole={setRole} />
        </Modal>
    );
};

export default UserModal;
