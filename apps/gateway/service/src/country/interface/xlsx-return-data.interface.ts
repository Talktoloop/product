import { RegionRO } from '../response/region.ro';
export interface XlsxReturnData {
  data: RegionRO[];
  dataLanguages: {
    language?: string;
    defaultLanguage?: string;
  };
}
