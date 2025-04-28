// const t = [1, -1, 3];

// t.push(5);

// console.log(t.length);
// console.log(t[1]);

// t.forEach((value) => {
//   console.log(value);
// });

/**
 * array.concat() method creates a deep copy.
 * As in functional programming, we usually use
 * immutable data structures in React.
 */

const t = [1, -1, 3];

const t2 = t.concat(5);

console.log(t);
console.log(t2);
