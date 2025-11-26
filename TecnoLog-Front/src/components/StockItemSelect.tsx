import React, { useEffect, useState } from "react";
import { type IOptionType } from "./OptionSelect";
import SearchableOptionSelect from "./SearchableSelect";
import stockItemService, { type IStockItem } from "../services/stockItemService";

interface IStockItemSelectProps {
    stockItem?: string
    setStockItem: React.Dispatch<React.SetStateAction<IStockItem | undefined>>
}

const StockItemSelect: React.FC<IStockItemSelectProps> = ({ stockItem, setStockItem }) => {
    const [items, setItems] = useState<IStockItem[]>([]);
    const [options, setOptions] = useState<IOptionType[]>([]);
    const [selected, setSelected] = useState<IOptionType | null>(null);

    const handleLoad = async () => {
        const data = await stockItemService.getPaginated({});

        const values = data.paginatedItems.map(item => ({
            value: item.id,
            label: `${item.code} (${item.description})`
        }));

        setItems(data.paginatedItems);
        setOptions(values);

        if (stockItem) {
            const match = values.find(o => o.value === stockItem) ?? null;
            setSelected(match);
        }
    }

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <SearchableOptionSelect
            label="Produto"
            value={selected}
            options={options}
            onChangeValue={(opt) => {
                setSelected(opt);
                const fullItem = items.find(i => i.id === opt?.value);

                setStockItem(fullItem);
            }}
            isClearable
            required
        />
    );
};

export default StockItemSelect;