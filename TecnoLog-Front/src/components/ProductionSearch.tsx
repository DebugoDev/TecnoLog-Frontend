import React from "react";
import Input from "./Input";
import { FolderOpen, Funnel } from "lucide-react";
import ButtonImportFile from "./ButtonImportFile";

const ProductionBar: React.FC = () => {
    return (
        <div className="w-auto bg-[#f8f9fa] h-22 rounded-2xl flex items-center justify-between p-4 z-20">
            <div className="w-1/2 flex items-center gap-10">
                <Input label="Item" />
                <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                    <Funnel />
                    Filtros
                </a>
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <div className="flex p-8">
                    <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                        <FolderOpen />
                        Categorias
                    </a>
                </div>
                <div className="flex h-12">
                    <ButtonImportFile />
                </div>
            </div>
        </div>
    );
};

export default ProductionBar;
