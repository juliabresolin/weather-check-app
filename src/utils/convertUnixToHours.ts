interface convertProps {
  unixTime: number;
  unixTimezone: number;
}

function convertUnixToHours({ unixTime, unixTimezone }: convertProps) {
  const date = new Date((unixTime + unixTimezone) * 1000);
  const timeFormat = (('0' + date.getUTCHours()).slice(-2) + ':' + ('0' + date.getUTCMinutes()).slice(-2));
  return timeFormat;
}

export default convertUnixToHours;
