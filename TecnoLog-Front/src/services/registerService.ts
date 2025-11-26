import api from "./api";

interface ICreateRegisterPayload {
    stockItemId: string;
    amount: number;
    registerType: string;
    observation?: string;
}

const registerService = {
    createRegister: async (payload: ICreateRegisterPayload) => {
        const { data } = await api.post("/registers", payload);
        return data;
    }
};

export default registerService;
