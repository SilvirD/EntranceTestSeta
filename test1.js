function find(strArr) {
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].length);
  }

  var defFreq = 1;
  var count = 0;
  var item;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) count++;
      if (defFreq < count) {
        defFreq = count;
        item = newArr[i];
      }
    }
    count = 0;
  }

  let res = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length === item) {
      res.push(strArr[i]);
    }
  }
  return res;
}

const strArr = ["a", "ab", "abc", "cd", "def", "gh"];
let a = find(strArr);

console.log(a);
