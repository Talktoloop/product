import { RegionRO } from '../response/region.ro';
import { CountryAdministrativeDataRepository } from '../repository/country-administrative-data.repository';
import { XlsxReturnData } from '../interface/xlsx-return-data.interface';
export declare class AdministrativeXlsxDataService {
    private readonly administrativeDataRepository;
    constructor(administrativeDataRepository: CountryAdministrativeDataRepository);
    getXlsxData(file: Express.Multer.File): Promise<XlsxReturnData>;
    getXlsxDataFromFirstTwoSheets(data: object): Promise<RegionRO[]>;
    getXlsxDataFromThirdSheet(data: object, currentLevel: number, depth: number): Promise<RegionRO[]>;
    mergeTwoArrays(parentArray: RegionRO[], childArray: RegionRO[]): Promise<RegionRO[]>;
    saveAdministrativeXlsxData(dataLanguages: Record<string, string>, languages: Record<string, number>, data: RegionRO[], countryId: number, level?: number, parentId?: any): Promise<void>;
}
