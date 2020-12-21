import { IRON } from './colors';

export const genericBorder = (color = IRON, size = '1px', type = 'solid') => `${size} ${type} ${color}`;