import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import InputNormal from "./InputNormal";
import MovSelect from "./MovSelect";

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
        <div
            className={`fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm transition-all duration-200 ${visible ? "bg-black/40" : "bg-black/0 pointer-events-none"
                }`}
        >
            <div
                className={`bg-[#f8f9fa] rounded-2xl shadow-xl w-[500px] max-h-[80vh] overflow-y-auto p-6 relative transform transition-all duration-200 ease-in-out ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold text-[#1f3449] mb-6 text-center">
                    Dados da Movimentação
                </h2>
                <div className="flex flex-col gap-5 items-center">
                    <InputNormal placeholder="Código" />
                    <InputNormal placeholder="Quantidade" />
                    <InputNormal placeholder="Observação" />
                    <div className="flex justify-center items-center w-4/5">
                        <MovSelect
                            role={mov}
                            setRole={setMov}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleClose}
                        className="bg-[#175476] text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-[#1f3449] transition duration-200 ease-in"
                    >
                        Registrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovModal;