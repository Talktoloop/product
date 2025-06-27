import * as fs from 'fs';

export const parseFileToJson = (path: string): JSON => {
  const readFile = fs.readFileSync(path, { encoding: 'utf8' });
  return JSON.parse(readFile);
};
