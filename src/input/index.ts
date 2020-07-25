import fs from 'fs';
import path from 'path';

const getFilePath = (filePath: string): string =>
  path.resolve(`./src/input/files/${filePath}`);

export const getAsSingleLine = (filePath: string): string =>
  fs.readFileSync(getFilePath(filePath)).toString();
