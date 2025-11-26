import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import InputNormal from "./InputNormal";
import MovSelect from "./MovSelect";
import Modal from "./Modal";

interface MovModalProps {
    onClose: () => void;
}

const MovModal: React.FC<MovModalProps> = ({ onClose }) => {
    const [visible, setVisible] = useState(false);
    const [mov, setMov] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => onClose(), 200);
    };

    return (
        <Modal
            title="Nova movimentação"
            onClose={() => { }}
            onSubmit={async () => { }}
        >
            <InputNormal label="Código" />
            <InputNormal label="Quantidade" />
            <InputNormal label="Observação" />
            <div className="flex justify-center items-center w-4/5">
                <MovSelect
                    role={mov}
                    setRole={setMov}
                />
            </div>
        </Modal>

    );
};

export default MovModal;