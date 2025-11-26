import { Download } from "lucide-react";
import React, { useRef } from "react";
import ButtonIcon from "./ButtonExportFile";

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
            <ButtonIcon icon={Download} tooltip="Importar CSV" onClick={handleButtonClick} />
        </>
    );
};

export default ButtonImportFile;
