import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const initApp = createAction(ACTIONS.INIT_APP);