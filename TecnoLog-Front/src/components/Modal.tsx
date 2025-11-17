import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

interface IModalProps {
    title: string
    onClose: () => void
    children?: React.ReactNode
    onSubmit: () => Promise<any>
}

const Modal: React.FC<IModalProps> = ({ title, onClose, children, onSubmit }) => {
    const [visible, setVisible] = useState(false);

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
            className={`fixed inset-0 z-10 flex justify-center items-center backdrop-blur-sm transition-all duration-200 ${visible ? "bg-black/40" : "bg-black/0 pointer-events-none"}`}
        >
            <div className={`
                bg-[#f8f9fa] rounded-2xl shadow-xl 
                w-full max-w-[600px] m-8 p-6
                transform transition-all duration-200 ease-in-out
                ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-[#1f3449] mb-5 text-center w-full">
                    {title}
                </h2>
                <form
                    className=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    <div className="max-h-[60vh] overflow-y-auto flex flex-col gap-5 items-center w-full p-6">
                        {children}
                    </div>
                    <div className="flex justify-center mt-5">
                        <Button title={"Registrar"} type="submit" />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Modal;