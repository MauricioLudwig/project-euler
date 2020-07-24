import fs from 'fs';
import path from 'path';

const getFilePath = (filePath: string) =>
  path.resolve(`./src/input/files/${filePath}`);

export const getAsSingleLine = (filePath: string) =>
  fs.readFileSync(getFilePath(filePath)).toString();
