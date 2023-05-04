

console.log("==============================================");

let text="Life is easy with Javascript";
let num= 5;

console.log(`${text} and ${num} is a number`);


console.log("==============================================");

const cleanMyRoom = false;

//Promise is an Object and its constructor takes two callback functions as parameter
let countValue = new Promise(function (resolve, reject) {
    // Executor function/Producer Code
    if (cleanMyRoom) {
        resolve("Hooray!! I am going to Play.");
    } else {
        reject("Sorry no play, do the laundry");
    }
});

//Printing Promise Object
console.log(countValue);

//Consumer Code
countValue
.then(resolve=>console.log(`${resolve}`))
.catch(error=>console.log(`${error}`));



/**
 * Using PROMISE to FETCH Data using the input URL 
 */
        
   let myResolve= fetch('http://localhost:8080/employee');

   myResolve
   .then(res=>res.json())
   .then(json=>console.log(json))
   .catch(error=>console.log(`Broken URL ${error}`))
   

