import { IBaseEntityDN } from './base-entity.model';

export interface ICategory extends IBaseEntityDN {
  count: number;
  checked?: boolean;
}
