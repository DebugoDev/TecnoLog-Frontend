import React from "react";
import Input from "./Input";
import { FolderOpen, Funnel } from "lucide-react";
import ButtonFile from "./ButtonFile";
import Button from "./Button";

interface SearchbarProps {
    title: string;
}

const SearchBar: React.FC<SearchbarProps> = ({ title }) => {
    return (
        <div className="w-auto bg-[#f8f9fa] h-22 rounded-2xl flex items-center justify-between p-4 z-20">
            <div className="w-1/2 flex items-center gap-25">
                <Input placeholder="Item" />
                <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                    <Funnel />
                    Filtros
                </a>
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <div className="flex p-15">
                    <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                        <FolderOpen />
                        Categorias
                    </a>
                </div>
                <div className="flex gap-2 h-12">
                    <ButtonFile />
                    <Button title={`+ ${title}`} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
