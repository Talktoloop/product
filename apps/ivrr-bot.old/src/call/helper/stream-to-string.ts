import { Readable } from 'stream';

export const streamToString = (stream: Readable): Promise<any | any> => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () =>
      resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))),
    );
  }).catch((error) => {
    throw error;
  });
};
