import React, { useEffect, useState } from "react";
import stockSubgroupService from "../services/stockSubgroupService";
import type { IOptionType } from "./OptionSelect";
import CreatableOptionSelect from "./CreatableOptionSelect";
import { toast } from "react-toastify";

interface IStockSubgroupSelectProps {
    stockSubgroup?: string
    setStockSubGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

const StockSubgroupSelect: React.FC<IStockSubgroupSelectProps> = ({
    stockSubgroup,
    setStockSubGroup
}) => {
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await stockSubgroupService.getStockSubgroups();
        setOptions(data.values);

        if (stockSubgroup) {
            const match = data.values.find(o => o.value === stockSubgroup) ?? null;
            setSelected(match);
        }
    };

    useEffect(() => {
        handleLoad();
    }, []);

    const handleCreate = async (label: string) => {
        toast.promise(
            stockSubgroupService.createStockSubgroup({ name: label }),
            {
                pending: "Criando subgrupo...",
                success: `Subgrupo ${label} criado!`,
                error: {
                    render({ data }: any) {
                        const msg = data?.detail || data?.message;
                        return msg;
                    },
                }
            }
        ).then((created) => {
            const opt = { value: created.id, label: created.name };

            setOptions(o => [...o, opt]);
            setSelected(opt);
            setStockSubGroup(opt.value);
        });
    };


    return (
        <CreatableOptionSelect
            label="Subgrupo"
            value={selected}
            options={options}
            onCreateOption={handleCreate}
            onChangeValue={(opt) => {
                setSelected(opt);
                setStockSubGroup(opt?.value);
            }}
        />
    );
};

export default StockSubgroupSelect;
