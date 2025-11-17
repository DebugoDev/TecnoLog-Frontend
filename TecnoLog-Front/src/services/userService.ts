import type { IOptions } from "../components/OptionSelect";
import api, { type IPagination } from "./api";

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

interface IGetPaginatedUsersRequest {
    search: string
    page: number
    size: number
}

interface IGetPaginatedUsersResponse {
    paginatedItems: IUser[]
    pagination: IPagination
}

interface IImportUsersCsv {
    importedItems: number
}

const userService = {
    getPaginated: async ({ search, page, size }: IGetPaginatedUsersRequest): Promise<IGetPaginatedUsersResponse> => {
        const params = new URLSearchParams();

        params.append("query", search);
        params.append("page", page.toString());
        params.append("count", size.toString());

        return await api.get(`/users/paginated?${params}`);
    },

    getUserRoles: async (): Promise<IOptions> => {
        return await api.get("/users/roles/values");
    },

    importCsv: async (file: File): Promise<IImportUsersCsv> => {
        const formData = new FormData();
        formData.append("file", file);

        return await api.post("/users/import", formData, { isFormData: true });
    },

    exportCsv: async () => {
        await api.downloadCsv("/users/export");
    }
};

export default userService;
