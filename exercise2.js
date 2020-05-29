//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
//declare variable that shows where our index starts
let i=0;
while(i<10){
    console.log(` the value of i in the loop is :${i}`);
}




/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
//my add
let sum=(a,b)=>a+b;
let mult=(c,d)=>c*d;
let div=(e,f)=>e/f;
let powered=(g)=>Math.pow(g,2);
let final=(a,b)=>console.log(powered(div(mult(sum(a,b),20),10),2));

final(30,2);
/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

let zero = 20;
let func = () => console.log("hello TEKcamp!");
//added values to an array to loop
let arr = [20, 0, 'zero', zero, null, '0', !'', {}, func, 125, undefined, ''];

let check = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] && typeof array[i] === 'string') {
            console.log(`${array[i]} is a string and string values are truthy`)
        }
        else if (array[i] && typeof array[i] === 'number') {
            console.log(`${array[i]} is a number and numbers are truthy`)
        }
        else if (array[i] && typeof array[i] === 'object') {
            console.log(`${array[i]} is an object and all objects are truthy`)
        }
        else if (array[i] && typeof array[i] === 'function') {
            console.log(`${array[i]} is a function and all functions are objects so they are truthy`)
        }
        else if (array[i] && typeof array[i] === !'') {
            console.log(`${array[i]} is an empty string is false but the ! makes it truthy`)
        }
        else if (array[i]) {
            console.log(`${array[i]} its truthy`)
        }
        else if (typeof array[i] === null) {
            console.log(`${array[i]} is null and null values are falsy`)
        }
        else if (typeof array[i] === NaN) {
            console.log(`${array[i]} Not a number is also falsy`)
        }
        else if (typeof array[i] === undefined) {
            console.log(`${array[i]} is undefined and undefined values are falsy`)
        }
        else if (!array[i] && typeof array[i] === 'string') {
            console.log(`${array[i]} is an empty string that courses down to 0 and 0 is falsy`)
        }
        else if (!array[i] && array[i] === 0) {
            console.log(`${array[i]}  is falsy`)
        }
        else if (!array[i] && array[i] === -0) {
            console.log(`${array[i]} is negative 0 and its falsy`)
        }
    }
}
check(arr)
/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

switch (day) {
    case 'monday':
        console.log(`we got a long week ahead of us...`);
        break;
    case 'tuesday':
        console.log(`tuesday's are still beterr than mondays, but LONG way to go still`);
        break;
    case 'wednesday':
        console.log(`We are smack dab in the middle of the week`);
        break;
    case 'thursday':
        console.log(`Thursday night... the mood is right`);
        break;
    case 'friday':
        console.log(`TGIF.  Friday truly is the best day of the week!`)
        break;
    default:
        console.log(`It's a weekend!`)
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

age > 21 ? console.log(`adult`) : console.log(`minor`);
age > 13 && age < 19 ? console.log(`teen`) : console.log(`not a teenager`);
age > 65 ? console.log(`retired`): console.log(`still working...`);
/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

let me = {
    name: 'Cristian Gonzalez',
    age: 26,
    gender: 'male',
    hobbies: ['play games', 'code'],
    profession: 'Developer',
    education: 'Some College',
    learn () { console.log(this.name) },
    iLikeTo () { console.log(this.hobbies.map(item => `I like to ${item}`)) }
}

me.iLikeTo()
me.learn()
/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

// on method changes the state of power
let tv = {
    name: 'television',
    power: false,
    on() { this.power = true }
}

console.log(tv.power)
console.log(tv.on(), tv)

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

//sorry i felt like i should have done something fancier
let fav = (a, b, c) => {
    console.log(`I like ${a} the best because it holds so much functionality`)
    console.log(`I like ${b} second because they're essential to perform opperations`)
    console.log(`I like ${c} third because their methods are super easy to understand`)
}

fav('Objects', 'Number', 'String')

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...

let multiple = x => {
    //returns value
    return y => {
        return y * x
    }
}
let fn= multiple(3);
fn(10)


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

let stockGain = (basis)=>{
    let message =`is how much the stock has increased.`;
    return (yrs)=>{
        let r = 0.05;
        console.log(basis * (r * yrs) + message);
        return basis * (r * yrs);
    }
}

let futureValue=stockGain(10);
futureValue(200);