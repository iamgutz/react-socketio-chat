/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import withImageLoader from 'react-image-loader-hoc';
import { captureImageUrl, formatText } from './helpers';
import {
  BubbleWrap, Image, BubbleRow, bubbleColors, ImageWrap,
} from './styles';

const ImageLoader = withImageLoader(Image);

const Bubble = ({
  text,
  right,
  color,
  sender,
  time,
}) => {
  const [visible, setVisible] = useState(false);

  const imageUrl = captureImageUrl(text);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <BubbleRow>
      <BubbleWrap
        right={right}
        color={color}
        visible={visible}
      >
        {sender && (
          <h4>{sender}</h4>
        )}
        {imageUrl && (
          <ImageWrap href={imageUrl} target="_blank">
            <ImageLoader src={imageUrl} />
          </ImageWrap>
        )}
        <div dangerouslySetInnerHTML={{ __html: formatText(text) }} />
        {time && (
          <time>{time}</time>
        )}
      </BubbleWrap>
    </BubbleRow>
  );
};

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
  right: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(bubbleColors)),
  sender: PropTypes.string,
  time: PropTypes.string,
};

Bubble.defaultProps = {
  right: false,
  color: bubbleColors.default,
  sender: null,
  time: null,
};

export default Bubble;
export { bubbleColors };