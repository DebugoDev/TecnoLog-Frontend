import React from "react";
import Select, { type SingleValue, type StylesConfig } from "react-select";

interface OptionType {
    value: string;
    label: string;
}

interface DepartmentSelectProps {
    department: string;
    setDepartment: React.Dispatch<React.SetStateAction<string>>;
}

const options: OptionType[] = [
    { value: "make", label: "Make" },
    { value: "deliver", label: "Deliver" },
    { value: "source", label: "Source" },
    { value: "quality", label: "Quality" },
];

const customStyles: StylesConfig<OptionType, false> = {
    control: (base, state) => ({
        ...base,
        backgroundColor: "#f8f9fa",
        borderRadius: "1rem",
        borderColor: state.isFocused ? "#175476" : "#1f3449",
        boxShadow: state.isFocused ? "0 0 0 2px rgba(23,84,118,0.3)" : "none",
        padding: "2px 5px",
        fontSize: "1rem",
        color: "#1f3449",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
            borderColor: "#175476",
        },
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "#175476"
            : state.isFocused
            ? "#e8eef3"
            : "#ffffff",
        color: state.isSelected ? "#ffffff" : "#1f3449",
        cursor: "pointer",
        padding: "10px 15px",
        fontWeight: state.isSelected ? "600" : "normal",
        transition: "all 0.2s ease",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#1f3449",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#6b7280",
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: "#175476",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginTop: 6,
        overflow: "hidden",
    }),
};

const DepartmentSelect: React.FC<DepartmentSelectProps> = ({ department, setDepartment }) => {
    const handleChange = (selected: SingleValue<OptionType>) => {
        setDepartment(selected ? selected.value : "");
    };

    return (
        <div className="w-full">
            <Select
                options={options}
                styles={customStyles}
                placeholder="Departamento"
                value={options.find((opt) => opt.value === department) || null}
                onChange={handleChange}
                isSearchable={false}
            />
        </div>
    );
};

export default DepartmentSelect;