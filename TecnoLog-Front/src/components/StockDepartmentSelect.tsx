import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";
import stockDepartmentService from "../services/stockDepartmentService";

interface IStockDepartmentSelectProps {
    stockDepartment?: string
    setStockDepartment: React.Dispatch<React.SetStateAction<string | undefined>>
}

const StockDepartmentSelect: React.FC<IStockDepartmentSelectProps> = ({ stockDepartment, setStockDepartment }) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await stockDepartmentService.getStockDepartmentValues();
        setOptions(data.values);

        if (stockDepartment) {
            const match = data.values.find(o => o.value === stockDepartment) ?? null;
            setSelected(match);
        }
    }

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <OptionSelect
            isClearable
            label="Setor"
            value={selected}
            options={options}
            onChangeValue={(opt) => {
                setSelected(opt);
                setStockDepartment(opt?.value);
            }}
            required
        />
    );
};

export default StockDepartmentSelect;
