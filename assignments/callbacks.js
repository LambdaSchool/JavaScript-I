const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function callBack(output) {
  console.log(output);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
firstItem(items, callBack);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, callBack);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, callBack);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(3, 5, callBack);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(5, 5, callBack);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const findItem = list.find(function(el) {
    return el === item;
  });
  if (findItem) {
    return cb('list contains ' + item);
  } else {
    return cb('list does Not contain ' + item);
  }
}
contains('yo-yo', items, callBack);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

}


