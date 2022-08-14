const DateFormatter = (Date) => {
  const hours = Date.getHours();
  const minutes = Date.getMinutes();
  const years = Date.getFullYear();

  const hoursFormatted = hours < 10 ? `0${hours}` : hours;
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  return `${hoursFormatted}:${minutesFormatted} - ${years}`;
};
module.exports = { DateFormatter };
