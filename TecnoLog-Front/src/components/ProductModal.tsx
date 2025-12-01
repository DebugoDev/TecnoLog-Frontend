import React, { useState } from "react";
import InputNormal from "./InputNormal";
import StockGroupSelect from "./StockGroupSelect";
import UnitOfMeasurementSelect from "./UnitOfMeasurementSelect";
import StockSubgroupSelect from "./StockSubgroupSelect";
import Modal from "./Modal";
import StockDepartmentSelect from "./StockDepartmentSelect";
import stockItemService from "../services/stockItemService";
import { toast } from "react-toastify";

interface ProductModalProps {
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
    const [code, setCode] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [group, setGroup] = useState<string>();
    const [unit, setUnit] = useState<string>();
    const [subgroup, setSubgroup] = useState<string>();
    const [department, setDepartment] = useState<string>();
    const [minimum, setMinimum] = useState<number>();
    const [cost, setCost] = useState<number>();
    const [local, setLocal] = useState<string>();

    const canSubmit = !!code && !!description && !!group && !!unit && !!subgroup && !!department;

    async function handleSubmit() {
        if (!canSubmit) return;

        toast.promise(
            stockItemService.createStockItem({
                code,
                description,
                stockGroup: group,
                unitOfMeasurementId: unit,
                stockSubgroupId: subgroup,
                stockDepartmentId: department,
                cost,
                minimumStock: minimum,
                localization: local
            }),
            {
                pending: "Criando produto...",
                success: `${description} criado!`,
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg || "Erro ao criar produto";
                    }
                }
            }
        ).then(onClose);
    }

    return (
        <Modal
            title="Cadastrar novo produto"
            onClose={onClose}
            onSubmit={handleSubmit}
            submitDisabled={!canSubmit}
        >
            <InputNormal
                label="CÓDIGO - GRV"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={50}
                required
            />

            <InputNormal
                label="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={500}
                required
            />

            <div className="flex w-full gap-3 items-center">
                <StockGroupSelect
                    stockGroup={group}
                    setStockGroup={setGroup}
                />
                <UnitOfMeasurementSelect
                    unitOfMeasurement={unit}
                    setUnitOfMeasurement={setUnit}
                />
            </div>

            <StockSubgroupSelect
                stockSubgroup={subgroup}
                setStockSubGroup={setSubgroup}
            />

            <StockDepartmentSelect
                stockDepartment={department}
                setStockDepartment={setDepartment}
            />

            <div className="flex w-full gap-3 items-center">
                <InputNormal
                    label="Estoque Mínimo"
                    value={minimum}
                    onChange={(e) => setMinimum(Number(e.target.value))}
                    type="number"
                />

                <InputNormal
                    label="Custo"
                    value={cost}
                    onChange={(e) => setCost(Number(e.target.value))}
                    type="number"
                    min="0.00"
                    step="0.01"
                />
            </div>

            <InputNormal
                label="Localização"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                maxLength={255}
            />
        </Modal>
    );
};

export default ProductModal;
