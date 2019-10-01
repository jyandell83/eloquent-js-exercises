// Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

const flatten = (a,b) =>  {
    return a.concat(b)
}
let newArr = arrays.reduce(flatten, []);

console.log(newArr);

// Your own loop
// Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

const myMap = (value, test, update, body) => {
    for(let i = 0; i < value.length; i++) {
        if (test(value[i]) === false) {
            return;
        }
        else {
            
        }
    }
}

