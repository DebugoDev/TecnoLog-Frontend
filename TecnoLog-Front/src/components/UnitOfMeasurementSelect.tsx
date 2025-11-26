import React, { useEffect, useState } from "react";
import OptionSelect, { type IOptionType } from "./OptionSelect";
import unitOfMeasurementService from "../services/unitOfMeasurementService";

interface IUnitOfMeasurementSelectProps {
    unitOfMeasurement?: string
    setUnitOfMeasurement: React.Dispatch<React.SetStateAction<string | undefined>>
}

const UnitOfMeasurementSelect: React.FC<IUnitOfMeasurementSelectProps> = ({ unitOfMeasurement, setUnitOfMeasurement }) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await unitOfMeasurementService.getUnitOfMeasurementValues();
        setOptions(data.values);

        if (unitOfMeasurement) {
            const match = data.values.find(o => o.value === unitOfMeasurement) ?? null;
            setSelected(match);
        }
    }

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <OptionSelect
            label="Unidade de medida"
            value={selected}
            options={options}
            onChangeValue={(opt) => {
                setSelected(opt);
                setUnitOfMeasurement(opt?.value);
            }}
            required
        />
    );
};

export default UnitOfMeasurementSelect;