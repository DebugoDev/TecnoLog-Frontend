import React, { useState } from "react";
import Select, { type Props as SelectProps } from "react-select";
import { customStyles, type IOptionType } from "./OptionSelect";

interface ISearchableOptionSelectProps extends Omit<SelectProps<IOptionType, false>, "value" | "onChange"> {
    label: string
    value: IOptionType | null
    onChangeValue: (value: IOptionType | null) => void
    options: IOptionType[]
    limit?: number
}

const SearchableOptionSelect: React.FC<ISearchableOptionSelectProps> = ({ label, value, onChangeValue, options, limit = 15, ...rest }) => {

    const [input, setInput] = useState("");

    const filtered = options
        .filter(o =>
            o.label.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, limit);

    return (
        <div className="w-full">
            <Select
                {...rest}
                options={filtered}
                value={value}
                onChange={(v) => onChangeValue(v ?? null)}
                onInputChange={(text) => setInput(text)}
                styles={customStyles}
                placeholder={`${label} ${rest.required ? "*" : ""}`}
                menuPortalTarget={document.body}
                menuPosition="fixed"
                isSearchable={true}
                isClearable={rest.isClearable ?? !rest.required}
            />
        </div>
    );
};

export default SearchableOptionSelect;
