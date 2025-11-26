import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";

interface IStockGroupProps {
    stockGroup?: string
    setStockGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

const StockGroup: React.FC<IStockGroupProps> = ({ stockGroup, setStockGroup }) => {
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const options: IOptionType[] = [
        { value: "DIRECT", label: "Diretos" },
        { value: "INDIRECT", label: "Indiretos" },
        { value: "CONSUMO", label: "Consumo" },
    ];

    useEffect(() => {
        if (stockGroup) {
            const match = options.find(o => o.value === stockGroup) ?? null;
            setSelected(match);
        }
    }, [])

    return (
        <OptionSelect
            isClearable
            label="Grupo"
            value={selected}
            options={options}
            onChangeValue={(opt) => {
                setSelected(opt);
                setStockGroup(opt?.value);
            }}
        />
    );
};

export default StockGroup;
