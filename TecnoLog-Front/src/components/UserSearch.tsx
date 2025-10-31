import React, { type Dispatch, type SetStateAction } from "react";
import Input from "./Input";
import Button from "./Button";

import { FolderOpen } from "lucide-react";

interface SearchbarProps {
    title: string;
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<SearchbarProps> = ({ title, search, setSearch }) => {
    return (
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
                    <Button title={`+ ${title}`} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
