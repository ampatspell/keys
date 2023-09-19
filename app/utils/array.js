export const lastObject = (array) => {
  return array && array[array.length - 1];
};

export const removeAt = (array, index) => {
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const removeObject = (array, object) => {
  if (!array) {
    return;
  }
  let index = array.indexOf(object);
  return removeAt(array, index);
};
