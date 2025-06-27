import { AdministrationOptions } from '@app/shared/model/option.model';

export interface ICountry {
  id: number;
  code: string;
  prefix: number;
  hasChild: boolean;
  numberOfStories: number;
}

export interface IAdministative {
  id: number;
  name: string;
  hasChild: boolean;
  countryCode: string;
  numberOfStories: number;
}

export interface IHistoryAdministrativeData {
  id: number;
  countryCode: string;
  isCountry: boolean;
  parent: AdministrationOptions;
}

export interface IAdministativeSearch {
  countryCode: string;
  items: IAdministativeSearchItem[];
}

export interface IAdministativeSearchItem {
  id: number;
  name: string;
  numberOfStories: number;
  parentId: number;
  parentName: string;
  hasChild: boolean;
}

export interface IPlace {
  id: string;
  description: string;
}

// TODO: When project bumped to typescript 4+ should not be needed
export interface GeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}

// TODO: When project bumped to typescript 4+ should not be needed
export interface GeolocationPosition {
  readonly coords: GeolocationCoordinates;
  readonly timestamp: number;
}
