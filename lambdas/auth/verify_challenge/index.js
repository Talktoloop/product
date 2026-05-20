const AWS = require('aws-sdk');
const kms = new AWS.KMS();

exports.handler = async (event) => {
  // 1) Pull context data
  const email    = event.request.userAttributes.email;
  const expected = event.request.privateChallengeParameters.challenge;
  const answer   = event.request.challengeAnswer;

  // 2) Quick fail if the answer isn’t even the right ciphertext
  if (answer !== expected) {
    console.error('Challenge token mismatch');
    event.response.answerCorrect = false;
    return event;
  }

  try {
    // 3) Decrypt the base64‑encoded blob via KMS
    const cipherBuffer = Buffer.from(answer, 'base64');
    const { Plaintext } = await kms
      .decrypt({ CiphertextBlob: cipherBuffer, KeyId: process.env.KMS_KEY_ID })
      .promise();

    // 4) Parse your JSON payload
    const payload = JSON.parse(Plaintext.toString('utf8'));
    console.debug('Decrypted payload:', payload);

    // 5) Validate expiration
    const nowIso    = new Date().toISOString();
    const isExpired = nowIso > payload.expiration;
    console.info(`Token expired? ${isExpired}`);

    // 6) Final check: email matches & not expired
    if (payload.email === email && !isExpired) {
      event.response.answerCorrect = true;
    } else {
      console.info('Email mismatch or token expired');
      event.response.answerCorrect = false;
    }
  } catch (err) {
    console.error('Error during decrypt/validate:', err);
    event.response.answerCorrect = false;
  }

  return event;
};
