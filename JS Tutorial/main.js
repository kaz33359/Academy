// // alert("hello"); 
// // console.log("hello");
// const firstName = "Kaz" ;
// const lastName = "Kazuki" ;
// const phone = "7356563359";


// // ======== Template String way ========
// let result = `hi ${firstName} ${lastName} your Mobile number is ${phone}` ;
// // console.log(result);

// // ======== Html  Template ========
// let html = `
// <h1> ${firstName} </h1> 
// <p> ${lastName}</p>
// <span>${phone} </span>
// `;

// console.log(html)

// Control FLow
// const test = ["wachi", "amal", "Kaz"]; //Aray inizialization
// let i = 0; // Variable Diclaration

        // For Loop

// console.log("For Test");
// for(let i =  0; i <= 5; i++){
//     console.log(i)
// }
// console.log("Loop End")

// for ( i = 0; i < test.length; i++) {
//     // console.log(test[i]);
//     let html = `<div><h1>${test[i]}</h1></div>`
//     console.log(html)
// }

        // WHile loop

// console.log("While Test")
// while (i < test.length) {
//     console.log(test[i]);
//     i++;
// }

        // Do WHile loop

// console.log("Do While Test")
// do{
//     console.log(test[i]);
//     i++;
// }while(i < test.length)

        // IF Sattement
// const age = 20;
// const pass = 'P@ssword';

// if (age > 20) {
//     console.log("You Are  Old")
// }else{
//     console.log("You Are Not That old")
// }

// if (test.length>3) {
//     console.log("Too Long");
// } else {
//     console.log("Not Too Long");

// }

// if (pass.length >= 8 && pass.includes('@')) {
//     console.log("Password is Perfect");
// } else if (pass.length >= 8 || pass.includes('@')) {
//     console.log("ok Long");
// }else{
//     console.log("Bad Password");
// }



// // ======== Functions ========

// Function Declaration

function greet(){
    console.log("Hello World!!");
    return ;
}

// greet(); //Function call

// Function Expression ~ Stores function insodes a variable

// const speak = function (){
//     console.log("Hello World!!");
//     console.log("Hello World!!");
//     console.log("Hello World!!");
// };

// speak(); //Function call

// const test = () => 'test';

// const speak = () => 'Hello World!!';
// const res = speak();
// console.log(res); 
// arrow function

// const carea = (radius) => {
//     return 3.15 * radius**2;
// };
// const area =  carea(10);
// console.log(`area is ${area}`);


// ======== DOM Manupulation  ========

// const para = document.querySelector('p');
// console.log(para);

// const err = document.querySelector(".error");
// console.log(err);

// const div = document.querySelector("div.error");
// console.log(div);

// const paraAll = document.querySelectorAll("p");
// console.log(paraAll);
// paraAll.forEach(pra =>{
//     console.log(pra);
// });

// const arr = [1,2,3,4,5,6];
// console.log(arr);
// arr.forEach(ar =>{
//         console.log(ar);
// });




// Element by iD
// const title = document.getElementById('title');
// console.log(title);

// Element by class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);

// Element by Tag Name
// const ps = document.getElementsByTagName('p')
// console.log(ps);


// const para = document.querySelector('p')
// console.log(para);
// console.log(para.innerText);

// para.innerText = "Hello World changes"  // +=

// const para = document.querySelectorAll('p');

// para.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += 'New text';
// });

// para.innerText += "New text";
// para.innerText =  para.innerText+ "New text";

const content = document.querySelector( '.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>Changed to h2</h2>' // +=

const people = ['mario','romio','romario'];
people.forEach ( person => {
    content.innerHTML += `<h3> ${person}</h3>`
})

var a = 'helo';
console.log(`test ${a}`);

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute("href", "https://thedaxads.com/");

// const msg = document.querySelector(".error");
// console.log(msg.getAttribute('class'));
// msg.setAttribute("class", "success");
// msg.setAttribute("style", "color:green");
