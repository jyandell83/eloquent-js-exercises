console.log('working');
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

const range = (start, end, step = 1) =>  {
    const rangeArr = [];
    if (step > 0)  {
    for (let i = start; i <= end; i += step)  {
        rangeArr.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step)  {
        rangeArr.push(i);
        }
    } 
    return rangeArr;
};
const sum = (someArray) =>  {
    let sum = 0;
    for (let i = 0; i < someArray.length; i++)  {
        sum += someArray[i];
    }
    return sum;
};

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
