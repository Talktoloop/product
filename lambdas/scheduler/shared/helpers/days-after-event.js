const { parseDayToTime } = require('./date-to-time');

function isInTimePeriod(lastPossibleTriggerTime, eventDate, nowTime) {
  return (
    (lastPossibleTriggerTime <= eventDate && eventDate <= nowTime) ||
    (lastPossibleTriggerTime >= eventDate &&
      eventDate <= nowTime &&
      nowTime <= lastPossibleTriggerTime) ||
    (lastPossibleTriggerTime <= eventDate &&
      eventDate >= nowTime &&
      nowTime <= lastPossibleTriggerTime)
  );
}

function calculateDaysSinceEvent(triggerTimeInHours, eventDate) {
  if (!triggerTimeInHours) return undefined;

  const now = new Date();
  const userEventDate = new Date(eventDate);
  const lastPossibleTrigger = new Date(now.getTime() - triggerTimeInHours * 60 * 60 * 1000);

  const nowTime = parseDayToTime(now);
  const userRegistrationTime = parseDayToTime(userEventDate);
  const lastPossibleTriggerTime = parseDayToTime(lastPossibleTrigger);

  if (isInTimePeriod(lastPossibleTriggerTime, userRegistrationTime, nowTime)) {
    const timeDifference = now.getTime() - userEventDate.getTime();
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  return undefined;
}

function isTrue(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value !== 'string') return false;
  return ['true', '1', 'yes'].includes(value.toLowerCase().trim());
}

module.exports = { calculateDaysSinceEvent, isInTimePeriod, isTrue };
