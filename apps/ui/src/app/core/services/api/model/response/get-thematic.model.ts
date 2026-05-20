import { IBaseEntityCheck } from '@core/services/api/model/response/base-entity.model';

export interface IGetThematicAPI {
  code: string;
  children: IBaseEntityCheck[];
}

export interface IGetThematicAPIExtended extends IGetThematicAPI {
  id?: string;
  checked?: boolean;
}
