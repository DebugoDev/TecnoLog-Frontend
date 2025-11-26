import React, { useEffect, useState } from "react";
import InputNormal from "./InputNormal";
import MovSelect from "./MovSelect";
import Modal from "./Modal";
import StockItemSelect from "./StockItemSelect";
import type { IStockItem } from "../services/stockItemService";
import TextareaNormal from "./TextareaNormal";

interface MovModalProps {
    onClose: () => void;
}

const MovModal: React.FC<MovModalProps> = ({ onClose }) => {
    const [stockItem, setStockItem] = useState<IStockItem>();
    const [mov, setMov] = useState<string>();
    const [quantity, setQuantity] = useState<number>(0);
    const [error, setError] = useState<string>("");

    // Recalcula o erro sempre que quantity, mov ou stockItem mudarem
    useEffect(() => {
        if (mov === "OUTBOUND" && stockItem && quantity > stockItem.currentStock) {
            setError("Não é possível retirar mais do que o saldo atual!");
        } else {
            setError("");
        }
    }, [quantity, mov, stockItem]);

    const projectedBalance = () => {
        if (!stockItem) return null;

        switch (mov) {
            case "INBOUND":
                return { value: stockItem.currentStock + quantity, color: "text-green-600", sign: "+" };
            case "OUTBOUND":
                return { value: stockItem.currentStock - quantity, color: "text-red-600", sign: "-" };
            case "FIX":
                return { value: quantity, color: "text-gray-500", sign: "" };
            default:
                return null;
        }
    };

    const balance = projectedBalance();
    const canSubmit = !error && quantity > 0 && stockItem && mov;

    return (
        <Modal
            title="Nova movimentação"
            onClose={onClose}
            onSubmit={async () => {
                if (!canSubmit) return;
                // lógica de submissão
            }}
            submitDisabled={!canSubmit}
        >
            <StockItemSelect setStockItem={setStockItem} />

            <div className="flex w-full items-center gap-3">
                <InputNormal
                    label="Quantidade"
                    type="number"
                    min={0}
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <span className="font-semibold text-2xl">{stockItem?.unitOfMeasurement ?? "?"}</span>
            </div>

            {balance && (
                <div>
                    {mov === "FIX" ? (
                        <span className="text-gray-500 font-semibold">
                            Novo saldo será: {balance.value} {stockItem?.unitOfMeasurement ?? ""}
                        </span>
                    ) : (
                        <span className="font-semibold">
                            <span className={`${balance.color}`}>
                                {balance.sign}{quantity}{stockItem?.unitOfMeasurement ?? ""}
                            </span>{" "}
                            <span className="text-gray-500">
                                | Saldo projetado: {balance.value} {stockItem?.unitOfMeasurement ?? ""}
                            </span>
                        </span>
                    )}
                </div>
            )}

            <TextareaNormal
                label="Observações"
                rows={4}
            />
            <MovSelect
                mov={mov}
                setMov={setMov}
            />

            {error && (
                <span className="text-red-500 text-sm">{error}</span>
            )}
        </Modal>
    );
};

export default MovModal;
