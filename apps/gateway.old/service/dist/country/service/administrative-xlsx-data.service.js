"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeXlsxDataService = void 0;
const common_1 = require("@nestjs/common");
const xlsx = __importStar(require("exceljs"));
const country_administrative_data_repository_1 = require("../repository/country-administrative-data.repository");
let AdministrativeXlsxDataService = class AdministrativeXlsxDataService {
    constructor(administrativeDataRepository) {
        this.administrativeDataRepository = administrativeDataRepository;
    }
    async getXlsxData(file) {
        var _a, _b;
        const workbook = new xlsx.Workbook();
        await workbook.xlsx.load(file.buffer);
        const data = workbook.worksheets;
        const regionArray = await this.getXlsxDataFromFirstTwoSheets(data);
        const depth = workbook.worksheets.length - 2;
        const levelUpArray = await this.getXlsxDataFromThirdSheet(data, 2, depth);
        const dataLanguages = {
            language: (_a = data[0]
                .getColumn('A')
                .values[1]) === null || _a === void 0 ? void 0 : _a.toString().split('_')[1].toLocaleLowerCase(),
            defaultLanguage: (_b = data[0]
                .getColumn('B')
                .values[1]) === null || _b === void 0 ? void 0 : _b.toString().split('_')[1].toLocaleLowerCase(),
        };
        const returnArr = await this.mergeTwoArrays(regionArray, levelUpArray);
        return { data: returnArr, dataLanguages };
    }
    async getXlsxDataFromFirstTwoSheets(data) {
        const regionArray = [];
        for (const i of [0, 1]) {
            const columnAData = data[i].getColumn('A');
            const columnBData = data[i].getColumn('B');
            columnAData.eachCell(function (cellA, rowNumber) {
                var _a, _b;
                if (rowNumber !== 1) {
                    if (i === 0)
                        regionArray.push({
                            name: cellA.value,
                            defaultName: (_a = columnBData.values[rowNumber]) !== null && _a !== void 0 ? _a : undefined,
                            subregions: [],
                        });
                    if (i === 1)
                        regionArray[0].subregions.push({
                            name: cellA.value,
                            defaultName: (_b = columnBData.values[rowNumber]) !== null && _b !== void 0 ? _b : undefined,
                            subregions: [],
                        });
                }
            });
        }
        return regionArray;
    }
    async getXlsxDataFromThirdSheet(data, currentLevel, depth) {
        if (!data[currentLevel])
            return [];
        const currentArray = [];
        const columnAData = [];
        data[currentLevel].getColumn('A').eachCell(function (cellA, rowNumber) {
            if (rowNumber !== 1) {
                columnAData.push(cellA.value);
            }
        });
        let levelUpArray = [];
        if (depth !== 0) {
            levelUpArray = await this.getXlsxDataFromThirdSheet(data, currentLevel + 1, depth - 1);
        }
        const columnBData = data[currentLevel].getColumn('B');
        const columnCData = data[currentLevel].getColumn('C');
        for (const [index, cell] of columnAData.entries()) {
            index % 1000 === 0
                ? console.log('CURRENT CELL:', index, 'ON LEVEL:', currentLevel)
                : null;
            const parentName = columnBData.values[index + 2];
            const defaultName = columnCData.values[index + 2];
            const parentRegion = currentArray.find((object) => object.name === parentName);
            if (parentRegion) {
                parentRegion.subregions.push({
                    name: cell,
                    defaultName: defaultName !== null && defaultName !== void 0 ? defaultName : undefined,
                });
            }
            else {
                currentArray.push({
                    name: parentName,
                    subregions: [{ name: cell, defaultName: defaultName !== null && defaultName !== void 0 ? defaultName : undefined }],
                });
            }
        }
        return this.mergeTwoArrays(currentArray, levelUpArray);
    }
    async mergeTwoArrays(parentArray, childArray) {
        if (!parentArray) {
            return childArray;
        }
        const result = [...parentArray];
        if (Array.isArray(childArray)) {
            for (const childObject of childArray) {
                const matchingRegion = result.find((parentObject) => parentObject.name === childObject.name);
                if (childObject.subregions &&
                    childObject.subregions.length > 0 &&
                    childObject.name === childObject.subregions[0].name)
                    childObject.subregions.shift();
                if (matchingRegion) {
                    matchingRegion.subregions = await this.mergeTwoArrays(matchingRegion.subregions, childObject.subregions);
                }
                else {
                    const existingSubregion = result.reduce((acc, curr) => {
                        if (!curr.subregions)
                            return;
                        return (curr.subregions.find((subregion) => subregion.name === childObject.name) || acc);
                    }, null);
                    if (existingSubregion) {
                        existingSubregion.subregions = await this.mergeTwoArrays(existingSubregion.subregions, childObject.subregions);
                    }
                    else {
                        result.push(childObject);
                    }
                }
            }
        }
        return result;
    }
    async saveAdministrativeXlsxData(dataLanguages, languages, data, countryId, level = 1, parentId = null) {
        let entity;
        for (const item of data) {
            entity = await this.administrativeDataRepository.save({
                names: [
                    { name: item.name, code: dataLanguages.language },
                    {
                        name: item.defaultName,
                        code: dataLanguages.defaultLanguage,
                    },
                ]
                    .filter((value) => languages[value.code])
                    .map((value) => ({
                    name: value.name,
                    languageId: languages[value.code],
                })),
                countryId,
                hasChild: item.subregions && item.subregions.length > 0 ? true : false,
                parentId,
                level,
            });
            if (item.subregions && item.subregions.length > 0) {
                await this.saveAdministrativeXlsxData(dataLanguages, languages, item.subregions, countryId, level + 1, entity.id);
            }
        }
    }
};
exports.AdministrativeXlsxDataService = AdministrativeXlsxDataService;
exports.AdministrativeXlsxDataService = AdministrativeXlsxDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [country_administrative_data_repository_1.CountryAdministrativeDataRepository])
], AdministrativeXlsxDataService);
//# sourceMappingURL=administrative-xlsx-data.service.js.map