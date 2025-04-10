import { SortByCountryNamePipe } from './sort-by-country-name.pipe';

describe('SortByCountryNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByCountryNamePipe();
    expect(pipe).toBeTruthy();
  });
});
