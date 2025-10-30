import api from "./api";

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        role: string;
    };
}

const authService = {
    login: async (data: ILoginRequest): Promise<ILoginResponse> => {
        return await api.post("/auth", data);
    },
};

export default authService;