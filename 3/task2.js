// Реализуйте функцию sum

function sum() {
  var res = 0;
  this.forEach((i) => {
    res += i;
  });
  return res;
}

console.log("2: ", sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
