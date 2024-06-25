import axiosInstance from "@services/axiosInstance";
import { AxiosResponse } from "axios";
import { RequestListAllProps } from "./interface";

export default {
  listAll: async ({ platformName, categoryId = '', page = 1, pageSize = 10, selectedPeriod = '', id_wap = '' }: RequestListAllProps): Promise<AxiosResponse> => {
    return await axiosInstance.get(
      `/tendencias/ranking-produtos?tp_plataforma=${platformName?.toUpperCase()}&tp_ranking=MAIS_VENDIDOS${categoryId && '&id_categoria=' + categoryId}&page=${page}&per_page=${pageSize}${selectedPeriod && '&qt_dias_periodo=' + selectedPeriod}${id_wap && '&id_wap=' + id_wap}`
    );
  }
};
