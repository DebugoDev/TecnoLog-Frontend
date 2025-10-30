// src/services/authService.ts
import { api } from "./api";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        role: string;
    };
}

export const authService = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
        return await api.post("/auth", data);
    },
};
