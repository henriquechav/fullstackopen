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

const t = [1, 2, 3];
const t2 = t.concat(5);
console.log(t);
console.log(t2);

/* map() method */
const m1 = t.map((value) => value * 2);
console.log(m1);

const m2 = t.map((value) => "<li>" + value + "</li>");
console.log(m2);

/* destructuring assignment */
t.push(4);
t.push(5);

const [first, second, ...rest] = t;
console.log(first, second);
console.log(rest);
