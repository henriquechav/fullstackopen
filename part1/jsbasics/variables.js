const x = 1;
let y = 5;
/* var is hoisted and it has global scope */
var z;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
x = 4;
