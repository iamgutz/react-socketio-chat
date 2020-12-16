import _map from 'lodash/map';
import _compact from 'lodash/compact';

export const filterHandlersUndefinedActionTypes = handlers => {
  let index = 0;
  const list = _compact(_map(handlers, (handler, key) => {
    let obj = null;
    if (key === 'undefined') {
      obj = {
        key,
        handler,
        index,
      };
    }
    index += 1;
    return obj;
  }));
  return list;
};