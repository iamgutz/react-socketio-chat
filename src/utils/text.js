// eslint-disable-next-line no-useless-escape
export const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
const lineBreakRegex = /\n/g;
const htmlRegex = /(<([^>]+)>)/gi;

export const formatTextWithLinks = text => {
  const newText = text.replace(urlRegex, '<br /><a href="$1" target="_blank">$1</a><br />');
  return newText;
};

export const formatTextWithLineBreaks = text => {
  const newText = text.replace(lineBreakRegex, '<br />');
  return newText;
};

export const stripHtml = text => text.replace(htmlRegex, '');
