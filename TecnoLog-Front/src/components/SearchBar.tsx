import React, { useState, type Dispatch, type SetStateAction } from "react";
import Input from "./Input";
import ButtonImportFile from "./ButtonImportFile";
import Button from "./Button";
import { FolderOpen, FolderUp, Funnel } from "lucide-react";
import ButtonIcon from "./ButtonExportFile";
import UserModal from "./UserModal";
import { toast } from "react-toastify";
import stockItemService from "../services/stockItemService";

interface SearchBarProps {
    title: string
    objects: string
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    csvImportService: (file: File) => Promise<any>
    csvExportService: () => Promise<void>
}

const SearchBar: React.FC<SearchBarProps> = ({ title, objects, search, setSearch, csvImportService, csvExportService }) => {

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
            csvImportService(file),
            {
                pending: "Importando...",
                success: {
                    render({ data }) {
                        return `${data.importedItems} ${objects} importados.`;
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
    }

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
                        <ButtonIcon icon={FolderUp} tooltip="Exportar CSV" onClick={csvExportService} />
                        <ButtonImportFile handleFileChange={handleFileChange} />
                        <Button title={`+ ${title}`} onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>

            {showModal && <UserModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default SearchBar;