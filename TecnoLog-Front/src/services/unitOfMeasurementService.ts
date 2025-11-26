import type { IOptions } from "../components/OptionSelect";
import api from "./api";

const unitOfMeasurementService = {
    getUnitsOfMeasurement: async (): Promise<IOptions> => {
        return await api.get("/units-of-measurement/values");
    }
};

export default unitOfMeasurementService;