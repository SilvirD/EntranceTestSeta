const arr1 = [1, 4, 2, 3, 5];
const arr2 = [100, 40, 1, 3, 5, 8];

const test = (arr) => {
  let arrSort = arr.sort((a, b) => {
    return b - a;
  });
  return arrSort[0] + arrSort[1];
};

console.log(test(arr1));
// console.log(test(arr2));
