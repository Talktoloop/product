import { Injectable } from '@nestjs/common';
import { RegionRO } from '../response/region.ro';
import * as xlsx from 'exceljs';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { CountryAdministrativeDataRepository } from '../repository/country-administrative-data.repository';
import { XlsxReturnData } from '../interface/xlsx-return-data.interface';

@Injectable()
export class AdministrativeXlsxDataService {
  constructor(
    private readonly administrativeDataRepository: CountryAdministrativeDataRepository,
  ) { }

  async getXlsxData(file: Express.Multer.File): Promise<XlsxReturnData> {
    const workbook = new xlsx.Workbook();
    // await workbook.xlsx.load(file.buffer as Buffer);
    const data = workbook.worksheets;

    const regionArray = await this.getXlsxDataFromFirstTwoSheets(data);

    const depth = workbook.worksheets.length - 2;
    const levelUpArray = await this.getXlsxDataFromThirdSheet(data, 2, depth);

    const dataLanguages = {
      language: data[0]
        .getColumn('A')
        .values[1]?.toString()
        .split('_')[1]
        .toLocaleLowerCase(),
      defaultLanguage: data[0]
        .getColumn('B')
        .values[1]?.toString()
        .split('_')[1]
        .toLocaleLowerCase(),
    };

    const returnArr = await this.mergeTwoArrays(regionArray, levelUpArray);
    return { data: returnArr, dataLanguages };
  }

  async getXlsxDataFromFirstTwoSheets(data: object): Promise<RegionRO[]> {
    const regionArray: RegionRO[] = [];
    for (const i of [0, 1]) {
      const columnAData = data[i].getColumn('A');
      const columnBData = data[i].getColumn('B');
      columnAData.eachCell(function (cellA, rowNumber) {
        if (rowNumber !== 1) {
          if (i === 0)
            regionArray.push({
              name: cellA.value,
              defaultName: columnBData.values[rowNumber] ?? undefined,
              subregions: [],
            });
          if (i === 1)
            regionArray[0].subregions.push({
              name: cellA.value,
              defaultName: columnBData.values[rowNumber] ?? undefined,
              subregions: [],
            });
        }
      });
    }
    return regionArray;
  }

  async getXlsxDataFromThirdSheet(
    data: object,
    currentLevel: number,
    depth: number,
  ): Promise<RegionRO[]> {
    if (!data[currentLevel]) return [];
    const currentArray = [];

    const columnAData = [];
    data[currentLevel].getColumn('A').eachCell(function (cellA, rowNumber) {
      if (rowNumber !== 1) {
        columnAData.push(cellA.value);
      }
    });

    let levelUpArray = [];
    if (depth !== 0) {
      levelUpArray = await this.getXlsxDataFromThirdSheet(
        data,
        currentLevel + 1,
        depth - 1,
      );
    }

    const columnBData = data[currentLevel].getColumn('B');
    const columnCData = data[currentLevel].getColumn('C');

    for (const [index, cell] of columnAData.entries()) {
      index % 1000 === 0
        ? console.log('CURRENT CELL:', index, 'ON LEVEL:', currentLevel)
        : null;
      const parentName = columnBData.values[index + 2];
      const defaultName = columnCData.values[index + 2];

      const parentRegion = currentArray.find(
        (object) => object.name === parentName,
      );

      if (parentRegion) {
        parentRegion.subregions.push({
          name: cell,
          defaultName: defaultName ?? undefined,
        });
      } else {
        currentArray.push({
          name: parentName,
          subregions: [{ name: cell, defaultName: defaultName ?? undefined }],
        });
      }
    }

    return this.mergeTwoArrays(currentArray, levelUpArray);
  }

  async mergeTwoArrays(
    parentArray: RegionRO[],
    childArray: RegionRO[],
  ): Promise<RegionRO[]> {
    if (!parentArray) {
      return childArray;
    }
    const result = [...parentArray];
    if (Array.isArray(childArray)) {
      for (const childObject of childArray) {
        const matchingRegion = result.find(
          (parentObject) => parentObject.name === childObject.name,
        );

        if (
          childObject.subregions &&
          childObject.subregions.length > 0 &&
          childObject.name === childObject.subregions[0].name
        )
          childObject.subregions.shift();
        if (matchingRegion) {
          matchingRegion.subregions = await this.mergeTwoArrays(
            matchingRegion.subregions,
            childObject.subregions,
          );
        } else {
          const existingSubregion = result.reduce((acc, curr) => {
            if (!curr.subregions) return;

            return (
              curr.subregions.find(
                (subregion) => subregion.name === childObject.name,
              ) || acc
            );
          }, null);

          if (existingSubregion) {
            existingSubregion.subregions = await this.mergeTwoArrays(
              existingSubregion.subregions,
              childObject.subregions,
            );
          } else {
            result.push(childObject);
          }
        }
      }
    }

    return result;
  }

  async saveAdministrativeXlsxData(
    dataLanguages: Record<string, string>,
    languages: Record<string, number>,
    data: RegionRO[],
    countryId: number,
    level = 1,
    parentId = null,
  ): Promise<void> {
    let entity: CountryAdministrativeDataEntity;

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
        await this.saveAdministrativeXlsxData(
          dataLanguages,
          languages,
          item.subregions,
          countryId,
          level + 1,
          entity.id,
        );
      }
    }
  }
}
