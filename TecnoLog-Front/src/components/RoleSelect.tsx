import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";
import userService from "../services/userService";

interface IRoleSelectProps {
    role?: string
    setRole: React.Dispatch<React.SetStateAction<string>>;
}

const RoleSelect: React.FC<IRoleSelectProps> = ({ role, setRole }) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await userService.getUserRoles();
        setOptions(data.values);

        if (role) {
            const match = data.values.find(o => o.value === role) ?? null;
            setSelected(match);
        }
    }

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <OptionSelect
            label="Acesso"
            value={selected}
            options={options}
            onChangeValue={(opt) => {
                setSelected(opt);
                setRole(opt?.value ?? "");
            }}
            required
        />
    );
};

export default RoleSelect;
