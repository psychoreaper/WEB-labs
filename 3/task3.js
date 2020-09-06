const object1 = {
  name: "Boris",
  weight: 15,
};

const object2 = {
  name: "Boris",
  weight: 15,
};

const object3 = {
  name: "Rex",
  weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(ob1, ob2) {
  return ob1.name === ob2.name && ob1.weight === ob2.weight;
}

console.log("3.1: ", isEquivalent(object1, object2)); // true
console.log("3.2: ", isEquivalent(object1, object3)); // false
