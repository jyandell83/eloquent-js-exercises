console.log('sanity check');
// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
let hash = '#';
for (let i = 0; i < 7; i++)  {
    console.log(hash);
    hash = hash + '#';
}

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let i = 1; i <= 100; i++)  {
    if (i % 3 == 0 && i % 5 == 0)  {
        console.log('FizzBuzz');
    }
    if (i % 3 == 0)  {
        console.log('Fizz');
    } 
    else if (i % 5 == 0)  {
        console.log('Buzz');
    } 
    else  {
        console.log(i);
    }
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let chessboard = '';
let size = 20;
for (let j = 1; j <= size; j++) {
    chessboard += '\n';
    if (j % 2 !== 0) {
        for (let i = 1; i <= size; i++)  {
            if (i % 2 == 0) {
                chessboard += '#';
            }
            else {
                chessboard += ' ';
            }
        }
    }
    else {
        for (let i = 1; i <= size; i++)  {
            if (i % 2 == 0) {
                chessboard += ' ';
            }
            else {
                chessboard += '#';
            }
        }
    }
}
console.log(chessboard);
