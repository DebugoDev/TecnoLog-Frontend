import type { IOptions } from "../components/OptionSelect";
import api from "./api";

const userDepartmentService = {
    getUserDepartments: async (): Promise<IOptions> => {
        return await api.get("/user-departments/values");
    }
};

export default userDepartmentService;
