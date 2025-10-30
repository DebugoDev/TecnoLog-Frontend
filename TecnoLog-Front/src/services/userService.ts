import api, { type IPagination } from "./api";

interface IGetPaginatedRequest {
    search: string
    page: number
    size: number
}

export interface IUser {
    code: number
    name: string
    userDepartment: string
    email: string
    role: "ADMIN" | "MANAGER" | "USER" | "DATA"
    profile: {
        abbreviation: string
        color: string
    },
    id: string
    createdAt: Date
}

interface IGetPaginatedResponse {
    paginatedItems: IUser[]
    pagination: IPagination
}

const userService = {
    getPaginated: async ({ search, page, size }: IGetPaginatedRequest): Promise<IGetPaginatedResponse> => {
        const params = new URLSearchParams();

        params.append("query", search);
        params.append("page", page.toString());
        params.append("count", size.toString());

        return await api.get(`/users/paginated?${params}`);
    }
};

export default userService;
