/* eslint-disable no-console */
import { filterHandlersUndefinedActionTypes } from 'utils/redux';
import reducers, { INITIAL_STATE, handlers } from './reducers';

describe('Session Reducers', () => {
  it('should return initial state', () => {
    const result = reducers(undefined, {});
    expect(result).toEqual(INITIAL_STATE);
  });
  it('should not have undefined action types in handlers', () => {
    const undefinedActionTypes = filterHandlersUndefinedActionTypes(handlers);
    const empty = [];

    expect(undefinedActionTypes).toEqual(empty);
  });
});