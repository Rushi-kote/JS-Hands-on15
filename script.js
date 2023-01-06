// Q1: Write one example explaining how you can write a callback function.
// function sum(a,b){
//     return a+b;
// }

// function callback(name, sum){
//     console.log(`${name} is ${sum}`);
// }

// callback("Sum of numbers",sum(10,20));


// function print(i){
//     console.log(i);
// }

// function callback1(cb){
//     for(let i =1;i<=10;i++){
//         cb(i);
//     }
// }

// callback1(function cb(i){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// });

// Q2

// function callback1(){
//     let count=1;
//     setTimeout(()=>{
//         console.log(count++);
//         setTimeout(()=>{
//             console.log(count++);
//             setTimeout(()=>{
//                 console.log(count++);
//                 setTimeout(()=>{
//                     console.log(count++);
//                     setTimeout(()=>{
//                         console.log(count++);
//                         setTimeout(()=>{
//                             console.log(count++);
//                             setTimeout(()=>{
//                                 console.log(count++);
//                                 setTimeout(()=>{
//                                     console.log(count++);
//                                     setTimeout(()=>{
//                                         console.log(count++);
//                                         setTimeout(()=>{
//                                             console.log(count++);
//                                         },10000);
//                                     },9000);
//                                 },8000);
//                             },7000);
//                         },6000);
//                     },5000);
//                 },4000);
//             },3000);
//         },2000);
//     },1000);
// }

// callback1();


/* Q3"Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed 
after 2 sec, 3 should be printed after 3 sec, and so on. 

Numbers
1
2
3
4
5
6
7"
*/

// function promise(n){
//     const myPromise = new Promise((res,rej)=>{
//         // let n =num;
//         (function(n){
//             setTimeout(()=>{
//                 res(n);
//             },1000*n)
//         })(n);
//     });
//     return myPromise;
// }


// for(let i=1;i<8;i++){
//     promise(i).then((data)=>{
//         console.log(data);
//     });
// }

/**
 * Q4 "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
then it should go to reject the state and catch the error and print Promise Rejected "
 */

// function promise(str){
//   const myPromise = new Promise(function(res,rej){
//         if(str=="yes"){
//             res("Promise resolved");
//         }else{
//             rej("Promise Rejected");
//         }
//   });
//   return myPromise;
// }

// let str = "";
// promise(str).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });

/**
 * Q5: Create examples to explain callback function
 */

// function callback(num,ret){
//  if(num%2==0){
//      ret(true);
//  }else{
//      ret(false);
//  }
// }

// function printEvenOdd(bool){
//     if(bool==true){
//         console.log("even number is passed");
//     }else{
//         console.log("Odd number is passed");
//     }
// }

// callback(2,printEvenOdd);

/**Q6: Create examples to explain callback hell function */

// setTimeout(()=>{
//     console.log("rushi")
//     setTimeout(()=>{
//         console.log("state");
//         setTimeout(()=>{
//             console.log("city");
//             setTimeout(()=>{
//                 console.log("area/locality");
//             },1000);
//         },1000);
//     },1000);
// },1000);

/**
 * Q7 Create examples to explain promises function
 */

let user ={name:"rushi",state:"Maharastra",city:"pune",area:"pimpari"};

// function promise(user){
//     const myPromise = new Promise(function(resolve,reject){
        
//             setTimeout(function(){
//                 resolve(user);
//             },1000);
//     });
//     return myPromise;
// }

// promise(user).then(function(data){
//     console.log(data.name);
//     return data;
// }).then(function(data){
//     console.log(data.state);
//     return data;
// }).then(function(data){
//     console.log(data.city);
//     return data;
// }).then(function(data){
//     console.log(data.area);
// });

/**
 * Q8: Create examples to explain async await function
 */

//  function promise(user){
//     const myPromise = new Promise(function(resolve,reject){
        
//             setTimeout(function(){
//                 resolve(user);
//             },1000);
//     });
//     return  myPromise;
// }

// async function display(user){
//     let result = await promise(user);
//     console.log(result);
// }

// display(user)
    

//Q9: Create examples to explain promise.all function

function promise(user){
    const newpromise = new Promise((resolve, reject) => {
        setTimeout(function(){
            if(2%2==0){
                resolve("true");
            }
        },1000);
    })
    const myPromise = new Promise(function(resolve,reject){
        
            setTimeout(function(){
                resolve(user);
            },1000);
    });
    return  Promise.all([newpromise,myPromise]);
}

async function display(user){
    let result = await promise(user);
    console.log(result);
}

display(user);