import fs from 'fs';

export function readJsonFile(filePath: string) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err: unknown) {
    const { code } = err as NodeJS.ErrnoException;
    if (code === 'ENOENT') {
      return [];
    } else {
      throw err;
    }
  }
}

export function writeJsonFile(filePath: string, data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}
