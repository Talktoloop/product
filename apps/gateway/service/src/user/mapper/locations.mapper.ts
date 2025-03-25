import { plainToClass } from 'class-transformer';
import { LocationRO } from '../response/locations.ro';
import { GooglePlaceQueryAutocompleteResponse } from 'google-place-types';

export const locationsMapper = (
  locations: GooglePlaceQueryAutocompleteResponse,
): LocationRO[] => {
  if (!locations) {
    return [];
  }

  return locations.map((item) =>
    plainToClass(LocationRO, {
      ...item,
      description: item.description ?? item.formatted_address,
    }),
  );
};
