//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

let toCels = (temp) => {
    return (temp - 32) * 5 / 9;
};

// T(°F) = T(°C) × 9 / 5 + 32 <----- formula

let toFahrenheit =(temp)=>{
    return (temp * 9/5)+32;
}





/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

let vote = (age) => {
    age >= 18 ? console.log('yes') : console.log('no');
};



/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

let toArray = (str) => {
    let splitted = str.split(' ');
    return splitted.join(' ');
};




/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...


let revTelephone = (num) => {
    let str=num.toStr()
    let splitted = str.split('');
    let rev = splitted.reverse();
    return rev.join('');
};


/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...


let car = (make, model, year, color) => {
    //creates obj and adds values depending on the arguments passed into it could also use Object.create 
    let newCar = {};
    newCar.make = make;
    newCar.model = model;
    newCar.year = year;
    newCar.color = color;
    return newCar;
};

let myCar = car('chrysler', 200, 2018, 'gray');

let getMyCar = (obj) => {
    let mak = obj.make;
    let mod = obj.model;
    let yea = obj.year;
    let col = obj.color;
    console.log(mak, mod, yea, col);
};

getMyCar(myCar);




/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...


let zeroToFifteenth = () => {
    let i = 0;
    while (i <= 15) {
        i % 2 == 0 ? console.log('even') : console.log('odd');
        i++;
    }
};


/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

let fizzBuzz = () => {
    //initialize i for while loop
    let i = 0;
    while (i <= 100) {
        if (i % 15 == 0) {
            console.log('TEKcamp');
        } else if (i % 5 == 0) {
            console.log('camp');
        } else if (i % 3 == 0) {
            console.log('Tek');
        } else {
            console.log(i);
        }
        i++;
    }
};

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

let thirds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //if i is divisible by 3 console.log the num
        i % 3 == 0 ? console.log(nums[i]) : ''
    }
}


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

let school = foodArray[6].school;
console.log(school)

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".




// THIS was what i first wrote my naive answer but complexity was O(n^2)
let sentence = (arr1, arr2) => {
    let arrWithoutObj = [];
    for (let i = 0; i < arr1.length; i++) {
        //loops to check if i have a string in the array if not i will push the values of the object into new array
        if (typeof arr1[i] == 'string') {
            arrWithoutObj.push(arr1[i])
        } else {
            arrWithoutObj.push(...Object.values(arr1[i]))
        }
    }
    for (let i = 0; i < arrWithoutObj.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            //check if index of i and j are the same if they are output a string
            if (i === j) {
            //if arr[i]==value ends with s puts first line 'are' else puts 'is'
                if (arrWithoutObj[i].slice(-1) == 's') {
                    console.log(`${arrWithoutObj[i]} are ${arr2[j]}`)
                } else {
                    console.log(`${arrWithoutObj[i]} is ${arr2[j]}`)
                }
            }
        }
    }
}

sentence(foodArray, adjectiveArray)


//Secondary answer takes more space but complexity should be O(n)
let sentence = (arr1, arr2) => {
    //creates obj
    let hash = {};
    let arrWithoutObj = [];
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] == 'string') {
            arrWithoutObj.push(arr1[i])
        } else {
            arrWithoutObj.push(...Object.values(arr1[i]))
        }
    }
    //goes through array and adds the array without objects to the keys and arr2 to values
    for (let j = 0; j < arrWithoutObj.length; j++) {
        console.log(arr2[k])
        let key = arrWithoutObj[j];
        let val = arr2[j];
        hash[key] = val;
    }
    //loops through object to console.log() if key has an s at the end
    for (let item in hash) {
        if (item.slice(-1) == 's') {
            console.log(`${item} are ${hash[item]}`)
        } else {
            console.log(`${item} is ${hash[item]}`)
        }
    }
}

sentence(foodArray, adjectiveArray)


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = ['addition', 'subtract', 'multiply', 'divide'];

function doMath(arr, ...items) {
    //gets random value from array
  let operation = operations[Math.floor(Math.random() * operations.length)];
  //if the operation varibale matches with a function it uses the functions in the bottom
  if (operation == 'addition') {
    return add(...items);
  } else if (operation == 'subtract') {
    return sub(...items);
  } else if (operation == 'multiply') {
    return mult(...items);
  } else if (operation == 'divide') {
    return div(...items);
  }
}

// all these operations will be passed to the one above they all can get a diff ammount of elements passes into and then i use reduce to perform whichever function is needed
let add = (...items) => {
  return items.reduce((curr, accum) => {
    console.log('add');
    return curr + accum;
  });
};

let mult = (...items) => {
  return items.reduce((curr, accum) => {
    console.log('multiply');
    return curr * accum;
  });
};

let div = (...items) => {
  return items.reduce((curr, accum) => {
    console.log('divide');
    return curr / accum;
  });
};

let sub = (...items) => {
  return items.reduce((curr, accum) => {
    console.log('subtract');
    return curr - accum;
  });
};

doMath(operations, 10, 10, 10);