import type { RegisterType } from "../types/RegisterType";
import api, { type IGetPaginatedRequest, type IPagination } from "./api";
import type { IStockItem } from "./stockItemService";
import type { IUser } from "./userService";

export interface IRegister {
    registerType: RegisterType
    stockItem: IStockItem
    amount: number
    user?: IUser
    date: Date
    observation?: string
    id: string
    createdAt: Date
}

interface ICreateRegisterPayload {
    stockItemId: string
    amount: number
    registerType: string
    observation?: string
}

interface IGetPaginatedRegistersResponse {
    paginatedItems: IRegister[]
    pagination: IPagination
}

const registerService = {
    createRegister: async (payload: ICreateRegisterPayload) => {
        const { data } = await api.post("/registers", payload);
        return data;
    },

    getPaginated: async ({ search, page, size }: IGetPaginatedRequest): Promise<IGetPaginatedRegistersResponse> => {
        const params = new URLSearchParams();

        if (search) params.append("query", search);
        if (page) params.append("page", page.toString());
        if (size) params.append("count", size.toString());

        return await api.get(`/registers/paginated?${params}`);
    },
};

export default registerService;
