// Ques1: What are promises and why do we need them?

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.


let promise = new Promise(function(resolve, reject) {
    const x = "hello one";
    const y = "hello one"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, You are a champ');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });



// Ques 2:  What is the purpose of async/await keywords?

// An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise 's resolution, and then resumes the async function's execution and returns the resolved value. Remember, the await keyword is only valid inside async functions.



// a promise
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise1; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

// output is:----- Promise resolved 
// output-----hello


//-----------------------------------------------------------------------------------------------------



// Ques 3:-What is hoisting?    

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization



//------------------------------------------------------------------------------------------------------


//Ques 4:-What is the DOM?


// DOM stands for document Object Model
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

//--------------------------------------------------------------------------------------------------------

//Ques 5:- Difference between undefined vs not defined vs NaN

//undefined :--- The undefined property indicates that the variable has not been assigned a value or not declared at all.


// Not defined:---The value of "not defined" is similar to "undefined", in that it indicates that a variable does not exist. However, there is a subtle difference between the two.

// "not defined" is usually caused by a typo, or by trying to access a variable that is out of scope. "undefined" is usually caused by forgetting to assign a value to a variable.

// NaN:---The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number.




//----------------------------------------------------------------------------------------------------------


//Ques 6: How many operators do we have in JS ?

// 1. Arithmetic Operators
// 2. String Operators
// 3. Comparison Operators
// 4. Assignment Operators
// 5. Logical Operators
// 6. Infinity, NaN
// 7. Bitwise Operators

//------------------------------------------------------------------------------------------------------------




//Ques 7: What is callback hell


//Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.



const num = () => {
    console.log("Print all the numbers");
    setTimeout(() => {
        console.log(1)

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {

                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 1000);

                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);
}


num();



//----------------------------------------------------------------------------------------------------------

// Ques 8:- What is promise chaining

// Promise chaining: Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.


const add = (a, b) => {     
    return new Promise((resolve, reject) => {        
        setTimeout(() => {            
            if (a < 0 || b < 0) {                 
                return reject('Numbers must be non-negative')
            } 
            resolve(a + b)         
        }, 2000) 
    })
}
  
add(1, 2).then((sum) => {     
    console.log(sum)  // Print 3   
    return add(sum, 4)
}).then((sum2) => {     
    console.log(sum2) // Print 7 
}).catch((e) => { 
    console.log(e) 
});

//------------------------------------------------------------------------------------------------------

//Ques 9:- What are arrow functions?

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression 

// eg:-

//let x = function(x, y)=>{ return x * y; };

//------------------------------------------------------------------------------------------------------