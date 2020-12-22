/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import withImageLoader from 'react-image-loader-hoc';
import { captureImageUrl, formatText } from './helpers';
import { BubbleWrap, Image, BubbleRow } from './styles';

const ImageLoader = withImageLoader(Image);

const Bubble = ({
  text,
}) => {
  const imageUrl = captureImageUrl(text);
  return (
    <BubbleRow>
      <BubbleWrap>
        {imageUrl && (
          <ImageLoader src={imageUrl} />
        )}
        <div dangerouslySetInnerHTML={{ __html: formatText(text) }} />
      </BubbleWrap>
    </BubbleRow>
  );
};

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Bubble;