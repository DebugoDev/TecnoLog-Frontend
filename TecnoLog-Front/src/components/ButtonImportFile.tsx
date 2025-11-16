import { Download, Upload } from "lucide-react";
import React, { useRef } from "react";

interface IButtonImportFileProps {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void> | void;
}

const ButtonImportFile: React.FC<IButtonImportFileProps> = ({ handleFileChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => fileInputRef.current?.click();

    return (
        <>
            <input
                type="file"
                accept=".csv"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
            <button
                onClick={handleButtonClick}
                className="px-2 py-2 bg-[#1f3449] text-white rounded-lg hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
            >
                <Upload size={18} />
            </button>
        </>
    );
};

export default ButtonImportFile;
