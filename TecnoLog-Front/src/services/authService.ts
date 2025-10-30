import api from "./api";
import type { IUser } from "./userService";

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: IUser
}

const authService = {
    login: async (data: ILoginRequest): Promise<ILoginResponse> => {
        return await api.post("/auth", data);
    },
};

export default authService;