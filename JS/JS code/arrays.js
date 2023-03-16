let names = [ 'Abie', 'Melie', 'Dave', 'Abel', 'Mike' ];

let others = [ 'a', 'b', 'c', 'd', 'f' ];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

let comnine = lost.concat(fibonacci);
console.log(comnine);

// console.log(fibonacci.join('ab'));

// console.log(lost.shift());
// console.log(lost);

// console.log(lost.unshift(1, 2, 3,));
// console.log(lost);

// console.log(lost.reverse);
// console.log(lost.sort);

// console.log(others.indexOf('b'));
// console.log(others.lastIndexOf('d'));

let filtered = comnine.filter((x) => { if (x >= 15) return x;});
console.log(filtered);

names.forEach((name) => {console.log(`Abraham ${name}`)});

// console.log(filtered.every((num) => num < 10));

console.log( fibonacci.some((num) => num >= 17) );