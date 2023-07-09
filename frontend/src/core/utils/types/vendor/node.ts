export type NodePage<T> = {
  results: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  isFirstPage: boolean;
};
