/*let hi = (name) => {console.log(`Abraham ${name}`);};
hi('Alemseged');*/

// let names = [ 'Abie', 'Melie', 'Dave', 'Abel', 'Mike' ];
// let i = 0;
// names.map( (name) => { i++; console.log(`Abraham ${name} ${i}`)} ); 

let names = [ 'a', 'b', 'c', 'd', 'f' ];
let fnames = [ 'Abie', 'Melie', 'Dave', 'Abel', 'Mike' ];

var transformed = names.map((namef)=> { return (`${fnames} ${namef}`)});

console.log(transformed);