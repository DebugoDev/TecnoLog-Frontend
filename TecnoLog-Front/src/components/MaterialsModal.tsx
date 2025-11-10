import React, { useState } from "react";
import { Upload, FileDown, X } from "lucide-react";

interface Material {
    nome: string;
    quantidade: number | string;
}

interface CustomerData {
    idCliente: string;
    nomeCliente: string;
    valorTotal: string;
    endereco: string;
    cnpj: string;
    telefone: string;
    dataPedido: string;
    dataEntrega: string;
}

interface MaterialsModalProps {
    materials: Material[];
    customerData: CustomerData;
    onClose: () => void;
}

const MaterialsModal: React.FC<MaterialsModalProps> = ({
    materials,
    customerData,
    onClose,
}) => {
    const [activeTab, setActiveTab] = useState<"dados" | "materiais">("materiais");

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-[#f8f9fa] rounded-2xl shadow-xl w-[650px] max-h-[80vh] overflow-y-auto p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="flex justify-center mb-6">
                    <h2
                        className={`text-xl font-semibold mx-4 cursor-pointer ${activeTab === "dados"
                            ? "text-[#175476] border-b-2 border-[#175476]"
                            : "text-gray-800"
                            }`}
                        onClick={() => setActiveTab("dados")}
                    >
                        Dados
                    </h2>
                    <h2
                        className={`text-xl font-semibold mx-4 cursor-pointer ${activeTab === "materiais"
                            ? "text-[#175476] border-b-2 border-[#175476]"
                            : "text-gray-800"
                            }`}
                        onClick={() => setActiveTab("materiais")}
                    >
                        Materiais
                    </h2>
                </div>
                {activeTab === "dados" && (
                    <div className="space-y-4">
                        <div className="flex gap-4 w-full">
                            <div className="flex w-2/8">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.idCliente}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        ID Cliente
                                    </span>
                                </label>
                            </div>
                            <div className="flex w-6/8">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.nomeCliente}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Nome Cliente
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex w-full">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.endereco}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Endereço
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="flex w-1/2">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.cnpj}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        CNPJ
                                    </span>
                                </label>
                            </div>
                            <div className="flex w-1/2">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.telefone}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Telefone
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex w-1/2">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.dataPedido}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Data do Pedido
                                    </span>
                                </label>
                            </div>
                            <div className="flex w-1/2">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.dataEntrega}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Data de Entrega
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex w-full">
                                <label className="relative w-full">
                                    <input
                                        type="text"
                                        className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                        defaultValue={customerData.valorTotal}
                                        readOnly
                                    />
                                    <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                        Valor Total
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "materiais" && (
                    <div className="space-y-4">
                        {materials.map((mat, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center gap-4 rounded-xl p-2"
                            >
                                <div className="flex justify-center items-center w-6/8">
                                    <label className="relative w-full">
                                        <input
                                            type="text"
                                            className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                            defaultValue={mat.nome}
                                            readOnly
                                        />
                                        <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                            Material
                                        </span>
                                    </label>
                                </div>
                                <div className="flex justify-center items-center w-2/8">
                                    <label className="relative w-full">
                                        <input
                                            type="text"
                                            className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none focus:border-[#175476]"
                                            defaultValue={mat.quantidade}
                                            readOnly
                                        />
                                        <span className="absolute left-4 bottom-9 text-sm font-medium bg-[#f8f9fa] text-[#1f3449] pl-1 pr-1">
                                            Quantidade
                                        </span>
                                    </label>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-6">
                            <button className="bg-green-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200 ease-in cursor-pointer">
                                Separados
                            </button>

                            <div className="flex gap-4">
                                <button className="rounded-lg">
                                    <Upload className="w-7 h-7 text-[#175476] cursor-pointer" />
                                </button>
                                <button className="rounded-lg border-none outline-none">
                                    <FileDown className="w-7 h-7 text-[#175476] cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaterialsModal;
