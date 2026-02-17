const arr = [10, 2, 9, 6, 5];

// Immutable add
function addToArrayEnd(array, item) {
   return [...array, item];
}

function addToArrayStart(array, item) {
   return [item, ...array];
}

function addToArrayIndex(array, index, item) {
   return [...array.slice(0, index), item, ...array.slice(index)];
}

//
// Immutable update
const updateArray = (arr, newValue) => arr.map((x) => newValue);

const updateArrayByIndex = (arr, index, newValue) =>
   arr.map((value, i) => (i === index ? newValue : item));

//
// Immutable delete
const deleteByIndex = (arr, item) => arr.filter((value) => value !== item);
