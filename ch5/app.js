let arrays = [[1, 2, 3], [4, 5], [6]];

const flatten = (a,b) =>  {
    return a.concat(b)
}
let newArr = arrays.reduce(flatten, []);

console.log(newArr);

