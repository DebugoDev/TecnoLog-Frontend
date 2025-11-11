import React, { useState } from "react";
import Input from "./Input";
import { FolderOpen } from "lucide-react";
import Button from "./Button";
import UserModal from "./UserModal"; // importa o modal

interface SearchbarProps {
    title: string;
}

const UserSearch: React.FC<SearchbarProps> = ({ title }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="w-auto bg-[#f8f9fa] h-22 rounded-2xl flex items-center justify-between p-4 z-20">
                <div className="w-1/2 flex items-center gap-10">
                    <Input placeholder="Item" />
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    <div className="flex p-8">
                        <a className="flex gap-2 text-[#1f3449] hover:text-[#175476] transition-colors duration-200 cursor-pointer">
                            <FolderOpen />
                            Categorias
                        </a>
                    </div>
                    <div className="flex gap-2 h-12">
                        <Button title={`+ ${title}`} onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && <UserModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default UserSearch;
