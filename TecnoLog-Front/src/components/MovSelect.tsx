import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";

interface IMovSelectProps {
    mov?: string
    setMov: React.Dispatch<React.SetStateAction<string | undefined>>
}

const MovSelect: React.FC<IMovSelectProps> = ({ mov, setMov }) => {
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const options: IOptionType[] = [
        { value: "INBOUND", label: "Entrada" },
        { value: "OUTBOUND", label: "Saída" },
        { value: "FIX", label: "Correção" },
    ];

    useEffect(() => {
        if (mov) {
            const match = options.find(o => o.value === mov) ?? null;
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
                setMov(opt?.value);
            }}
            required
        />
    );
};

export default MovSelect;