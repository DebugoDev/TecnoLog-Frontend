import React from "react";
import CreatableSelect, { type CreatableProps } from "react-select/creatable";
import { customStyles, type IOptionType } from "./OptionSelect";

export interface ICreatableOptionSelectProps extends Omit<CreatableProps<IOptionType, false, any>, "value" | "onChange"> {
    label: string
    value: IOptionType | null
    onChangeValue: (value: IOptionType | null) => void
}

const CreatableOptionSelect: React.FC<ICreatableOptionSelectProps> = ({ label, value, onChangeValue, options, ...rest }) => {
    return (
        <div className="w-full">
            <CreatableSelect
                {...rest}
                options={options}
                value={value}
                onChange={(v) => onChangeValue(v ?? null)}
                styles={customStyles}
                placeholder={`${label} ${rest.required ? "*" : ""}`}
                menuPortalTarget={document.body}
                menuPosition="fixed"
                isClearable={!rest.required}
                isSearchable={true}
            />
        </div>
    );
};

export default CreatableOptionSelect;