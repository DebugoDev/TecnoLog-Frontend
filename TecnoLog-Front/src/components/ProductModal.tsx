import React, { useEffect, useState } from "react";
import InputNormal from "./InputNormal";
import StockGroupSelect from "./StockGroupSelect";
import UnitOfMeasurementSelect from "./UnitOfMeasurementSelect";
import StockSubgroupSelect from "./StockSubgroupSelect";
import UserDepartmentSelect from "./UserDepartmentSelect";
import Modal from "./Modal";
import StockDepartmentSelect from "./StockDepartmentSelect";

interface ProductModalProps {
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
    const [visible, setVisible] = useState(false);
    const [departamento, setDepartamento] = useState<string>();
    const [group, setGroup] = useState<string>();
    const [situation, setSituation] = useState("");
    const [unit, setUnit] = useState<string>();
    const [subgroup, setSub] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => onClose(), 200);
    };

    return (
        <Modal
            title="Cadastrar novo produto"
            onClose={onClose}
            onSubmit={async () => { }}
        >
            <InputNormal label="CÓDIGO - GRV" maxLength={50} required />
            <InputNormal label="Descrição" maxLength={500} required />
            <UnitOfMeasurementSelect
                unitOfMeasurement={unit}
                setUnitOfMeasurement={setUnit}
            />
            <InputNormal label="Localização" maxLength={255} />
            <StockDepartmentSelect
                stockDepartment={departamento}
                setStockDepartment={setDepartamento}
            />
            <StockGroupSelect
                stockGroup={group}
                setStockGroup={setGroup}
            />
            <StockSubgroupSelect
                departamento={subgroup}
                setDepartamento={setSub}
            />
            <InputNormal label="Custo" type="number" min="0.00" step="0.01" />
            <InputNormal label="Estoque Mínimo" type="number" />
        </Modal>
    );
};

export default ProductModal;