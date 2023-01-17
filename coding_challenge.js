function app(arr, target) {
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subtract = target - arr[i];

    if (obj[subtract]) {
      result.push([subtract, arr[i]]);
    }

    obj[arr[i]] = i;
  }
  return result;
}
