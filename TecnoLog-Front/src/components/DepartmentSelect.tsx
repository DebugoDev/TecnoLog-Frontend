import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";
import userDepartmentService from "../services/userDepartmentService";

interface IDepartmentSelectProps {
    department?: string
    setDepartment: React.Dispatch<React.SetStateAction<string>>
}

const RoleSelect: React.FC<IDepartmentSelectProps> = ({ department, setDepartment }) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await userDepartmentService.getUserDepartmentsRoles();
        setOptions(data.values);

        if (department) {
            const match = data.values.find(o => o.value === department) ?? null;
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
                setDepartment(opt?.value ?? "");
            }}
            required
        />
    );
};

export default RoleSelect;
