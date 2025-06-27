import { TextMaxLengthPipe } from './text-max-length.pipe';

describe('TextMaxLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TextMaxLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
