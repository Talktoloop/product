export interface IPaginationMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IBasePaginatedAPI<T = any> {
  items: Array<T>;
  meta: IPaginationMeta;
}
