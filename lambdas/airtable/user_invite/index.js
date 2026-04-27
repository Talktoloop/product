const { eventLogger, logError } = require('./shared/helpers/logger');
const { RedisService } = require('./shared/services/redis');
const { DbService } = require('./shared/services/db');
const { AirTableService } = require('./shared/services/airtable');

const REDIS_REPLY_TIMEOUT_MS = 5000;

exports.handler = async (event) => {
  eventLogger(event);

  const body = event.body ? JSON.parse(event.body) : {};
  const { userId, airTableId } = body;

  const redis = new RedisService();
  const db = new DbService();
  const airtable = new AirTableService();

  try {
    const reply = await redis.publishMessage(
      { userId },
      'sendInvitationToUser',
      REDIS_REPLY_TIMEOUT_MS,
    );

    if (reply && reply.response) {
      await db.updateInvitationDate(userId);
      if (airTableId) {
        await airtable.updateDataAfterReInvite(airTableId);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(reply && reply.response ? reply.response : reply),
    };
  } catch (error) {
    logError('user_invite publish message error', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Publish message error', error: error.message }),
    };
  }
};
