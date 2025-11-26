import type { IOptions } from "../components/OptionSelect"
import type { IPagination } from "./api"
import api from "./api"

export interface IStockItem {
    code: string
    description: string
    stockGroup: "DIRECT" | "INDIRECT" | "CONSUMPTION"
    currentStock: number
    unitOfMeasurement: string
    stockValue: number
    minimumStock: number
    status: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK"
    id: string
    createdAt: Date
}

export interface IStockOverview {
    outOfStock: number
    lowStock: number
    stockValue: number
}

export interface ICreateStockItemPayload {
    code: string;
    description?: string;
    unitOfMeasurementId?: string;
    localization?: string;
    stockDepartmentId?: string;
    stockGroup?: string;
    stockSubgroupId?: string;
    cost?: number;
    minimumStock?: number;
}

interface IGetPaginatedStockItemsRequest {
    search?: string
    page?: number
    size?: number
}

interface IGetPaginatedStockItemsResponse {
    overview: IStockOverview
    paginatedItems: IStockItem[]
    pagination: IPagination
}

interface IImportStockItemsCsv {
    importedItems: number
}

const stockItemService = {
    createStockItem: async (payload: ICreateStockItemPayload) => {
        const { data } = await api.post("/stock-items", payload);
        return data;
    },

    getStockItemValues: async (): Promise<IOptions> => {
        return await api.get("/stock-items/values");
    },

    getPaginated: async ({ search, page, size }: IGetPaginatedStockItemsRequest): Promise<IGetPaginatedStockItemsResponse> => {
        const params = new URLSearchParams();

        if (search) params.append("query", search);
        if (page) params.append("page", page.toString());
        if (size) params.append("count", size.toString());

        return await api.get(`/stock-items/paginated?${params}`);
    },

    importCsv: async (file: File): Promise<IImportStockItemsCsv> => {
        const formData = new FormData();
        formData.append("file", file);

        return await api.post("/stock-items/import", formData, { isFormData: true });
    },

    exportCsv: async () => {
        await api.downloadCsv("/stock-items/export");
    }
}

export default stockItemService;