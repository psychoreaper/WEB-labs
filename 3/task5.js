function createCounter() {
  let res = 1;
  return function () {
    return res++;
  };
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log("5: ", count()); // 5
