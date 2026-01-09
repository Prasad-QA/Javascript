
const arr = [1, 2, 3, 2, 1,];

const duplicates = arr.filter((a, b) =>
  arr.indexOf(a) !== b
);

console.log(duplicates);