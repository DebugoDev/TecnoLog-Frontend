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

interface IGetPaginatedStockItemsRequest {
    search: string
    page: number
    size: number
}

interface IGetPaginatedStockItemsResponse {
    overview: IStockOverview
    paginatedItems: IStockItem[]
    pagination: IPagination
}

const stockItemService = {
    getPaginated: async ({ search, page, size }: IGetPaginatedStockItemsRequest): Promise<IGetPaginatedStockItemsResponse> => {
        const params = new URLSearchParams();

        params.append("query", search);
        params.append("page", page.toString());
        params.append("count", size.toString());

        return await api.get(`/stockItems/paginated?${params}`);
    }
}

export default stockItemService;