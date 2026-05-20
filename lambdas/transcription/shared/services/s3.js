const { S3Client, GetObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const region = process.env.AWS_REGION || 'eu-central-1';
const s3 = new S3Client({ region });

async function getFileByName(fileName, bucketName) {
  const response = await s3.send(new GetObjectCommand({ Bucket: bucketName, Key: fileName }));
  const body = await streamToString(response.Body);
  return JSON.parse(body);
}

async function getMetaData(bucketName, file) {
  const response = await s3.send(new HeadObjectCommand({ Bucket: bucketName, Key: file }));
  return response.Metadata;
}

async function generateSignedUrl(bucketName, key, expirationInSeconds = 60) {
  return getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: bucketName, Key: key }),
    { expiresIn: expirationInSeconds },
  );
}

async function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  });
}

module.exports = { getFileByName, getMetaData, generateSignedUrl };
