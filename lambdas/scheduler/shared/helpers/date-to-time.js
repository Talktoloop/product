function parseDayToTime(date) {
  return new Date(
    0,
    0,
    0,
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
}

module.exports = { parseDayToTime };
