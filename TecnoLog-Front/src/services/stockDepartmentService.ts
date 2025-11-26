import type { IOptions } from "../components/OptionSelect";
import api from "./api";

const stockDepartmentService = {
    getStockDepartments: async (): Promise<IOptions> => {
        return await api.get("/stock-departments/values");
    }
};

export default stockDepartmentService;
