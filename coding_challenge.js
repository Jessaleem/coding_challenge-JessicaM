function app(arr, target) {
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subtract = target - arr[i];

    if (subtract in obj) {
      result.push([subtract, arr[i]]);
    }

    obj[arr[i]] = i;
  }
  return result;
}

module.exports = app;

console.log(app([1, 9, 5, 0, 20, -4, 12, 16, 7], 12));
console.log(app([2, 0, 4, -1, 6, 7], 6));
console.log(app([], 5));
