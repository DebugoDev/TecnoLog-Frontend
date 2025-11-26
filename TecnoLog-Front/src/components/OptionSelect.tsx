import React from "react";
import Select, { type Props as SelectProps, type StylesConfig } from "react-select";

export interface IOptions {
    values: IOptionType[]
}

export interface IOptionType {
    value: string
    label: string
}

export interface IOptionSelectProps extends Omit<SelectProps<IOptionType, false>, "value" | "onChange"> {
    label: string
    value: IOptionType | null
    onChangeValue: (value: IOptionType | null) => void
}

export const customStyles: StylesConfig<IOptionType, false> = {
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
    menuPortal: (base) => ({
        ...base,
        zIndex: 100
    }),
};

const OptionSelect: React.FC<IOptionSelectProps> = ({ label, value, onChangeValue, options, ...rest }) => {
    return (
        <div className="w-full">
            <Select
                {...rest}
                options={options}
                styles={customStyles}
                value={value}
                onChange={(selected) => onChangeValue(selected ?? null)}
                placeholder={`${label} ${rest.required ? "*" : ""}`}
                isSearchable={false}
                menuPortalTarget={document.body}
                menuPosition="fixed"
                isClearable={!rest.required}
            />

        </div>
    );
};


export default OptionSelect;