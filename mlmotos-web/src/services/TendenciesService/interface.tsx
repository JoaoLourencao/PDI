export interface PlatformProps {
  name: string;
  headerTitle: string;
  categoryId: string;
  category: string;
}

export interface RequestListAllProps {
  platformName: string;
  categoryId?: string;
  page?: number;
  pageSize?: number;
  selectedPeriod?: any;
  id_wap?: string;
}

export interface RequestListAllResponse {
  categorias: any;
  categorias_wap: any;
  tp_categoria: string;
  tp_plataforma: any;
}
