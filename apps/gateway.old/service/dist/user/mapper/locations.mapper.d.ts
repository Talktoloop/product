import { LocationRO } from '../response/locations.ro';
import { GooglePlaceQueryAutocompleteResponse } from 'google-place-types';
export declare const locationsMapper: (locations: GooglePlaceQueryAutocompleteResponse) => LocationRO[];
