/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";


// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
// Print out the concatenated string

console.log(tongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const camelTail1 = part1.slice(0, -1)
// Print the cameLtaiL-formatted string

const firstPart = "java";
const secondPart = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const camelTail = firstPart.slice(0, -1) + firstPart.slice(-1).toUpperCase() + secondPart.slice(0, -1) + secondPart.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(camelTail);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip amount (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tip amount
console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Gere um número inteiro aleatório entre 1 e 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Imprima o número aleatório gerado
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//retorn false
const expression2 = a || b;
//retorn true
const expression3 = !a && b;
//retorn false
const expression4 = !(a && b);
//return true
const expression5 = !a || !b;
//return true
const expression6 = !(a || b);
//return false
const expression7 = a && a;
//return true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)