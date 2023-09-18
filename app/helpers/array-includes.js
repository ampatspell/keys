import { helper } from '@ember/component/helper';

export default helper(function arrayIncludes([arr, object]) {
  if (Array.isArray(arr)) {
    return arr.includes(object);
  }
  return false;
});
