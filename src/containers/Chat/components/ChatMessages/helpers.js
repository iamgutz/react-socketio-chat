import { CLOCK_FORMATS } from 'App/settings/constants';

export const messageSenderIsSessionUser = (sessionUsername, messageUsername) => (
  messageUsername === sessionUsername
);

export const formatTime = (timeStamp, format = CLOCK_FORMATS.STANDARD) => {
  if (format === CLOCK_FORMATS.STANDARD) {
    return new Date(timeStamp).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  }

  const militaryTime = new Date(timeStamp).toTimeString().split(':');
  return `${militaryTime[0]}:${militaryTime[1]}`;
};