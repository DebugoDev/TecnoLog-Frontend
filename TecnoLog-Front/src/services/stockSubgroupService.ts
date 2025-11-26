import type { IOptions } from "../components/OptionSelect";
import api, { type ICreateObjectName, type IObjectNameResponse } from "./api";

const stockSubgroupService = {
    getStockSubgroups: async (): Promise<IOptions> => {
        return await api.get("/stock-subgroups/values");
    },

    createStockSubgroup: async (data: ICreateObjectName): Promise<IObjectNameResponse> => {
        return await api.post("/stock-subgroups", data);
    }
};

export default stockSubgroupService;
