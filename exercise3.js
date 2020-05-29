//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
//first checks if its a string and than checks if the length of it is 0
let empty = (str) => {
    typeof str !== 'string' ? console.log('thats not a string') : str.length != 0 ? console.log(false) : console.log(true)
}


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...


let coolString = (str) => {
    return `Learning JavaScript is ${str}!`
}


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...


let squared = (arr) => {
    let final = []
    arr.map(nums => {
        //raises the power by 2 when adding the numbs
        return final.push(Math.pow(nums, 2))
    })
    return final
}




/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...


let greaterThanThree = (arr) => {
    let biggerThan3 = []
    arr.map(item => {
        //checks if item is bigger than 3 if true pushes it to array
        item>3 ? biggerThan3.push(item):''  
    })
    return biggerThan3;
}



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...


let sumOfFive = (arr) => {
    //takes in array and reduces adds the elements
    return arr.reduce((accum, curr) => {
        return curr + accum;
    })
}




/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...


let genome = (str) => {
    let spl = str.split('');
    let final = [];
    //simple if i C send G to the array
    for (let i = 0; i < spl.length; i++) {
        if (spl[i] == 'G') {
            final.push('C')
        } else if (spl[i] == 'C') {
            final.push('G')
        } else if (spl[i] == 'A') {
            final.push('T')
        } else if (spl[i] == 'T') {
            final.push('A')
        }
    }
    return final;
}




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

let max = (arr) => {
  let nums = [];
   arr.map(item=>{
       //checks specific values than checks if typeof is number if so pushes to array
    if (item == 'one') {
      nums.push(1);
    }
    if (item == 'two') {
      nums.push(2);
    }
    if(item=='3'){
        nums.push(3)
    }
    if (item == 'three') {
      nums.push(3);
    }
    if (typeof item === 'number') {
      nums.push(item);
    }
    })
  return Math.max(...nums);
};

max(numbers)
// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order


let sorted = (arr, mer) => {
  let nums = [];
  arr.map((item) => {
      //same as above
    if (item == 'one') {
      nums.push(1);
    }
    if (item == 'two') {
      nums.push(2);
    }
    if (item == '3') {
      nums.push(3);
    }
    if (item == 'three') {
      nums.push(3);
    }
    if (typeof item === 'number') {
      nums.push(item);
    }
  });
  console.log(mer(nums));
};

//my implementation of merge sort but it does it backwards
let reverseMergeSort = (arr) => {
    //checks if array length is 1 if so returns it
  if (arr.length === 1) {
    return arr;
  }
  //gets middle index
  let middle = Math.floor(arr.length / 2);
  //cuts left side
  let left = arr.slice(0, middle);
  //cuts right side
  let right = arr.slice(middle);
  //recursevly  does above function
  let sortedLeft = reverseMergeSort(left);
  let sortedRight = reverseMergeSort(right);
  return merge(sortedLeft, sortedRight);
};
//helper function to main function
let merge = (left, right) => {

  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;
  //while the left Index is less than left side so until its fully splitted 
  while (leftIndex < left.length && rightIndex < right.length) {
      //if number in the left is less than number in the right push right THIS IS WHAT PRETTY MUCH MAKES IT GO FROM BIG TO LOW
    if (left[leftIndex] < right[rightIndex]) {
      results.push(right[rightIndex]);
      rightIndex++;
    } else {
        //SECOND PART OF PUSHING 
      results.push(left[leftIndex]);
      leftIndex++;
    }
  }
  //start adding all the pieces that were splittled above
  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

sorted(numbers, reverseMergeSort);


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
//adds valyes to the Map
mapObj.set('object', { company: 'TEKsystems' });
mapObj.set(`string`, `string`);
mapObj.set(`number`, 5);
mapObj.set(`boolean`, true);
//arrays are technically objects
mapObj.set('array', []);

   
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.
console.log(mapObj.has('object')); 
//your code...
console.log(`ur going through the values not keys`);
//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

let arrayRevese = (arr) => {
    //spread opperator to get the values in reverse using .reverse
    let reverse = [...arr].reverse();
    return reverse;
}

arrayRevese(ones)
/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.
let performer=(cb)=> {
  let welcome=`Hey there, how's it going?`
  return cb(welcome);
}
let hey=(str)=> console.log(str);

performer(hey);
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

let defaultP = (name = 'Amir') => console.log(`hi ${name} a 3 would be nice`);


defaultP();

//I Chose default parameters since it gave us a way to put parameters even if their not passed in or when something is usually picked we can have it if the user doesnt put it.