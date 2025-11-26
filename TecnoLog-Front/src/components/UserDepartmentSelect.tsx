import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";
import userDepartmentService from "../services/userDepartmentService";

interface IUserDepartmentSelectProps {
    userDepartment?: string
    setUserDepartment: React.Dispatch<React.SetStateAction<string | undefined>>
}

const UserDepartmentSelect: React.FC<IUserDepartmentSelectProps> = ({ userDepartment, setUserDepartment }) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await userDepartmentService.getUserDepartmentValues();
        setOptions(data.values);

        if (userDepartment) {
            const match = data.values.find(o => o.value === userDepartment) ?? null;
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
                setUserDepartment(opt?.value);
            }}
        />
    );
};

export default UserDepartmentSelect;
