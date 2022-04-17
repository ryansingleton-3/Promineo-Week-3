// Question Number 1 //

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // ages array 

function subtractAge() {    // function to subtract ages
let firstAge = ages[0];
let lastAge = ages.slice(-1);                
return lastAge - firstAge;
}
console.log(ages); // original array
console.log(subtractAge()); // 1st function call (part 1a)

ages.push(15); // adding a new age to the end of the original ages array
console.log(ages); // logging array including the new age added to the end

console.log(subtractAge()); // 2nd function call that includes new number at the end. (part 1b)

var sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {   // for loop to calculate the sum of the array
sumOfAges += ages[i];
}
var agesAverage = sumOfAges / ages.length;   // variable to calculate the average of the array (part 1c)
console.log(agesAverage.toFixed(2)); // 


// Question Number 2 //


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // names array

var total = 0;
for (let i = 0; i < names.length; i++) { // for loop to calculate the sum of characters in the array
    total +=names[i].length;
}
let namesAverage = total/names.length;
console.log(namesAverage.toFixed(2)); // average number of characters in each name; part 2a

i = 0;
do {                    // loop that joins elements of the array together. 
    i++
    console.log(names.join(''));
} while (i < 0);



// Question Number 3 //

// How do you access the last element of any array?
    // There are multiple ways to access it. One way to get the index of the last element is by using the lastIndexOf method. You can also put array[-1] to get to the last element. 



// Question Number 4 //

//How do you access the first element of any array?
    // This can be accessed by using the 0 index of the array. (array[0])



// Question Number 5 //



nameLengths = [];

names.forEach(function(name) {          // for each method (for loop) that adds each array element length into the new array. 
    nameLengths.push(name.length);
})
console.log(nameLengths);



// Question Number 6 // 

var sumOfCharacters = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfCharacters += nameLengths[i];
}
console.log(sumOfCharacters);


// Question Number 7 //


function concatenate(word, n) {  // function that concatenates the word n number of times and returns it all together
    return word.repeat(n)
}
console.log(concatenate("Hello", 3));



// Question Number 8 // 


function sayFullName (firstName, lastName) {  // function that prints the first and last name together with a space in between
    return firstName + " " + lastName;
}
console.log(sayFullName("Ryan", "Singleton"));


// Question Number 9 //

numbersArray1 = [36, 29, 51, 14]
var sumOfNumbers = numbersArray1.reduce(function (acc, cur) {  // function to sum the values in the numbers array
    return acc + cur;
}, 0)
console.log(sumOfNumbers);

function isGreaterThanOneHundred() { // function to decide if the sum of the numbers array is greater than 100
    if (sumOfNumbers > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(isGreaterThanOneHundred());




// Question Number 10 // 


numbersArray2 = [4, 7, 2, 8];

function getNumbersAverage() { // function that calculates the average of the numbers array
    sumOfNumbers2 = numbersArray2.reduce(function (a, b) {
        return a + b;
    }, 0);
    averageOfNumbers2 = sumOfNumbers2 / numbersArray2.length;
    return averageOfNumbers2;
}
console.log(getNumbersAverage());




// Question Number 11 // 

numArray1 = [7,8,9,10]
numArray2 = [1,2,3,4]

numAverage1 = 0;
numAverage2 = 0;
function getAverage1() {

    numSum1 = numArray1.reduce(function (a, b) {        // function that finds the average for the first array
        return a + b;
    }, 0);
    numAverage1 = numSum1 / numArray1.length;
        return numAverage1;
}
console.log(getAverage1());

function getAverage2() {

    numSum2 = numArray2.reduce(function (a, b) {        // function that finds the average for the second array
        return a + b;
    }, 0);
    numAverage2 = numSum2 / numArray2.length;
        return numAverage2;
}
console.log(getAverage2());

function getHigherAverage() {               // Function that determines if the first array's average is higher than the second one. 
    if (numAverage1 > numAverage2) {
        return true;
    } else {
        return false;
    }
}
console.log(getHigherAverage());



// Question Number 12 // 


function willBuyDrink(isHotOutside, moneyInPocket) {        // function that determines if we buy a drink or not
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("Yes, I will buy a drink.");
    } else {
        console.log("No way Jose.");
    }
}

console.log(willBuyDrink(true, 10.51));



// Question Number 13 // 
// This function will decide who's turn in my family it is to say the prayer. 

const familyMembers = ['Ryan', 'Alyssa', 'Benjamin', 'Emma', 'Jordan'];
const prayer = familyMembers[Math.floor(Math.random() * familyMembers.length)];

function whosTurnIsIt() {
    console.log(`It is ${prayer}'s turn!`);
}


console.log(whosTurnIsIt());