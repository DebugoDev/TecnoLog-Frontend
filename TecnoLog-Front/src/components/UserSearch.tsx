import React, { useState, type Dispatch, type SetStateAction } from "react";
import { FolderOpen, FolderUp, Upload } from "lucide-react";
import { toast } from "react-toastify";

import Button from "./Button";
import Input from "./Input";
import userService from "../services/userService";
import ButtonIcon from "./ButtonExportFile";
import ButtonImportFile from "./ButtonImportFile";
import UserModal from "./UserModal";

interface SearchbarProps {
    title: string;
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const UserSearch: React.FC<SearchbarProps> = ({ title, search, setSearch }) => {

    const [showModal, setShowModal] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== "text/csv") {
            toast.error("Selecione um arquivo CSV válido.");
            e.target.value = "";
            return;
        }

        toast.promise(
            userService.importCsv(file),
            {
                pending: "Importando...",
                success: {
                    render({ data }) {
                        return `${data.importedItems} usuários importados.`;
                    },
                },
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                },
            }
        ).finally(() => {
            e.target.value = "";
            setSearch("");
        });
    };


    return (
        <>
            <div className="w-auto bg-[#f8f9fa] h-22 rounded-2xl flex items-center justify-between p-4 z-20">
                <div className="w-1/2 flex items-center gap-10">
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        label="Pesquisa" />
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    <div className="flex p-8">
                        <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                            <FolderOpen />
                            Categorias
                        </a>
                    </div>
                    <div className="flex gap-2 h-12">
                        <ButtonIcon icon={FolderUp} tooltip="Exportar CSV" />
                        <ButtonImportFile handleFileChange={handleFileChange} />
                        <Button title={`+ ${title}`} onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>

            {showModal && <UserModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default UserSearch;
