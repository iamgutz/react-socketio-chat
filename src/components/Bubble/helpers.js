import {
  formatTextWithLineBreaks, formatTextWithLinks, stripHtml, urlRegex,
} from 'utils/text';

const imageRegex = /\.(jpeg|jpg|gif|png)$/;

export const formatText = text => formatTextWithLinks(
  formatTextWithLineBreaks(
    stripHtml(text),
  ),
);

export const captureImageUrl = text => {
  const urls = text.match(urlRegex);
  if (!urls || urls.length < 1) {
    return null;
  }
  const isImageUrl = imageRegex.test(urls[0]);
  return isImageUrl ? urls[0] : null;
};