// Output For Question No 1

var Qno1 = document.getElementById("Q1")

function sum(a,b){
    return a+b;
}

function result(operation,ans){
    console.log(`The ${operation} of given terms is ${ans}`)
}

result("SUM",sum(5,6))

Qno1.innerHTML += `<pre>function sum(a,b){
    return a+b;
}

function result(operation,ans){
    console.log("The {operation} of given terms is {ans}")
}
result("SUM",sum(5,6))</pre>
Firstly we have created one simple function to return a sum of two number. Then We have to create another function which shows to display the result of first function. Then call second function with a parameter which call first function.`


// Output For Question No 2

var Qno2 = document.getElementById("Q2")

function counting(){
    setTimeout(()=>{
        console.log("1")
        setTimeout(()=>{
            console.log("2")
            setTimeout(()=>{
                console.log("3")
                setTimeout(()=>{
                    console.log("4")
                    setTimeout(()=>{
                        console.log("5")
                        setTimeout(()=>{
                            console.log("6")
                            setTimeout(()=>{
                                console.log("7")
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
counting()

Qno2.innerHTML += `<pre>function counting(){
    setTimeout(()=>{
        console.log("1")
        setTimeout(()=>{
            console.log("2")
            setTimeout(()=>{
                console.log("3")
                setTimeout(()=>{
                    console.log("4")
                    setTimeout(()=>{
                        console.log("5")
                        setTimeout(()=>{
                            console.log("6")
                            setTimeout(()=>{
                                console.log("7")
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
counting()</pre> 
JavaScript is a strange language. Once in a while,you have to deal with a callback 
that's in another callback that's in yet another callback.
People affectionately call this pattern the "callback hell."`

// Output For Question No 3

Qno3 = document.getElementById("Q3")

function promisechain(alpha , timeout){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(alpha)
            res("This is resolved")
        },timeout)
    })
}

promisechain("1",1000)
.then(()=>promisechain("2",2000))
.then(()=>promisechain("3",3000))
.then(()=>promisechain("4",4000))
.then(()=>promisechain("5",5000))
.then(()=>promisechain("6",6000))
.then(()=>promisechain("7",7000))

Qno3.innerHTML += `<pre>function promisechain(alpha , timeout){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(alpha)
            res("This is resolved")
        },timeout)
    })
}

promisechain("1",1000)
.then(()=>promisechain("2",2000))
.then(()=>promisechain("3",3000))
.then(()=>promisechain("4",4000))
.then(()=>promisechain("5",5000))
.then(()=>promisechain("6",6000))
.then(()=>promisechain("7",7000))</pre>`

// Output For Question No 4

Qno4 = document.getElementById("Q4")

function mypromise(p){

    return  new Promise((res,rej)=>{
                if(p === "yes"){
                res('Promise Resolved')
                }
                else{
                rej(Error('Promise Rejected.'))
                }
            })
}
mypromise("yes")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

Qno4.innerHTML += `<pre>function mypromise(p){

    return  new Promise((res,rej)=>{
                if(p === "yes"){
                res('Promise Resolved')
                }
                else{
                rej(Error('Promise Rejected.'))
                }
            })
}
mypromise("yes")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))</pre>`

// Output For Question No 5

Qno5 = document.getElementById("Q5")

function display(name,age ,callback){
    console.log(`My name is ${name} and my age is ${age}`)
    callback("Prepbytes");
}
function callme(caller){
    console.log(`${caller} is calling you`)
}

display("Hrishabh",24,callme)

Qno5.innerHTML += `<pre>function display(name,age ,callback){
    console.log("My name is {name} and my age is {age}")
    callback("Prepbytes");
}
function callme(caller){
    console.log("{caller} is calling you")
}

display("Hrishabh",24,callme)</pre>`

// Output For Question No 6

Qno6 = document.getElementById("Q6")

function count(a){
    setTimeout(()=>{
        console.log(a)
    },1000*(a*(a+1)/2))
    return a+1;
}
count(count(count(count(count(count(count(1)))))))

Qno6.innerHTML += `<pre>function count(a){
    setTimeout(()=>{
        console.log(a)
    },1000*(a*(a+1)/2))
    return a+1;
}
count(count(count(count(count(count(count(1)))))))</pre>
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished`


// Output For Question No 7

Qno7 = document.getElementById("Q7")

function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
        reject("Division by zero error."); // Reject the promise if division by zero is attempted
    } else {
        const result = a / b;
        resolve(result); // Resolve the promise with the result of division
    }
    });
}
// Consuming the promise
divideNumbers(10, 5)
.then(result => console.log(result))
.catch(error => console.error(error));

Qno7.innerHTML += `<pre>function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
              reject("Division by zero error.");
            } else {
              const result = a / b;
              resolve(result);
            }
    });
}
divideNumbers(10, 5)
    .then(result => console.log(result))
    .catch(error => console.error(error));</pre>
Promises provide a way to handle asynchronous operations in JavaScript and allow us to write cleaner and more readable code by avoiding deeply nested callbacks. They simplify error handling and provide a consistent pattern for handling success and failure cases.`


// Output For Question No 8

Qno8 = document.getElementById("Q8")

function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
          reject("Error by law of division"); // Reject the promise if division by zero is attempted
        } 
        else {
          const result = a / b;
          resolve(result); // Resolve the promise with the result of division
        }
    });
}
  
async function performDivision() {
  try {
        const result = await divideNumbers(10, 5); // Await the resolved value of the promise
        console.log(result);
  } 
  catch (error) {
        console.error(error);
  }
}
  
// Calling the async function
performDivision();

Qno8.innerHTML += `<pre>function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error by law of division
        } 
        else {
            const result = a / b;
            resolve(result);
        }
    });
}

async function performDivision() {
        try {
          const result = await divideNumbers(10, 5);
          console.log(result);
        } 
        catch (error) {
            console.error(error);
        }
}

performDivision();</pre>
Async/await functions provide a more concise and synchronous-like way to handle asynchronous operations in JavaScript. The async keyword is used to define a function as asynchronous, and the await keyword is used to pause the execution and wait for the resolution of a promise.`

  
// Output For Question No 9

Qno9 = document.getElementById("Q9")

function multiplyNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Invalid arguments. Please provide numbers.");
        } 
        else {
            const result = a * b;
            resolve(result);
        }
    });
}
  
const promise1 = multiplyNumbers(5, 2);
const promise2 = multiplyNumbers(3, 4);
const promise3 = multiplyNumbers(7, 1);

Promise.all([promise1, promise2, promise3])
  .then(results => {
        console.log("All promises resolved:");
        results.forEach(result => console.log(result));
  })
  .catch(error => {
        console.error("An error occurred:", error);
  });

Qno9.innerHTML += `<pre>function multiplyNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Invalid arguments. Please provide numbers.");
        } 
        else {
            const result = a * b;
            resolve(result);
        }
    });
}
  
const promise1 = multiplyNumbers(5, 2);
const promise2 = multiplyNumbers(3, 4);
const promise3 = multiplyNumbers(7, 1);

Promise.all([promise1, promise2, promise3])
  .then(results => {
        console.log("All promises resolved:");
        results.forEach(result => console.log(result));
  })
  .catch(error => {
        console.error("An error occurred:", error);
  });</pre>
we define the multiplyNumbers function, which returns a promise that multiplies two numbers together. If the arguments are not numbers, the promise is rejected with an error message.

We create three promises (promise1, promise2, and promise3) by calling multiplyNumbers with different numbers.

We pass an array of these promises to Promise.all, which waits for all the promises to resolve. Once all the promises are resolved, the .then callback is executed, and we receive an array of results in the same order as the input promises. We log the results to the console.

If any of the promises reject, the .catch callback is executed with the first encountered error.`
  