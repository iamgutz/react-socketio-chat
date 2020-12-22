import { CLOCK_FORMATS, MESSAGE_SUBMIT_CONTROLS } from 'App/settings/constants';

export const CLOCK_DISPLAY_OPTIONS = {
  [CLOCK_FORMATS.STANDARD]: {
    id: CLOCK_FORMATS.STANDARD,
    label: '12 hours',
  },
  [CLOCK_FORMATS.MILITARY]: {
    id: CLOCK_FORMATS.MILITARY,
    label: '24 hours',
  },
};

export const SEND_MESSAGE_OPTIONS = {
  [MESSAGE_SUBMIT_CONTROLS.NORMAL]: {
    id: MESSAGE_SUBMIT_CONTROLS.NORMAL,
    label: 'Off',
  },
  [MESSAGE_SUBMIT_CONTROLS.SPECIAL]: {
    id: MESSAGE_SUBMIT_CONTROLS.SPECIAL,
    label: 'On',
  },
};