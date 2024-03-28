// let num = -5;
// if(num<0){
//     console.log("number is -ve");
// }else{
//     console.log("number is +ve");
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// if(num1<num2 && num3<num2){
//     console.log(`${num2} is greater`);
// }else if(num1<num3 && num1<num3){
//     console.log(`${num3} is greater`);
// }else{
//     console.log(`${num1} is greater`);
// }


// let num4=4;
// isPrime=true;
// for(let i=2; i<=num4; i++){
//     if(num4===0){
//         isPrime=false;
//         break;    
//     }

// }

// if( isPrime && num4 > 1){
//     console.log("prime no.")
// }else{
//     console.log("no prime  no.")
// }

// let no=91515;
// let div=false;
// for (let i=1; i<=9; i++){
//     if(no%i===0){
//         div=true;
//         break;
//     }
// }

// if(div===true){
//     console.log("this is divide by other number")
// }else{
//     console.log("this is !!divide by other number")
// }
// console.log("I am learning js write now i will message you later TC")

// let line= "Who Am I? shey";
// console.log(line);
// let line2=line.split("").reverse("").join("");
// console.log(line2);

// let yr =2007;
// let leapYr= (yr % 4 === 0) && ((yr%100 !== 0) || (yr % 400 === 0));
// if(leapYr === true){
//     console.log(`${yr} is leap yr `);
// }else{
//     console.log(`${yr} is not leap yr `);
// }

// let str="Shey";
// let vl="aeiou";
// let vowels="false";

// for(let i=0;i<str.length;i++){
//     if(vl.includes(str[i])){
//         vowels=true;
//         break;
//     }
// }

// if(vowels=true){
//     console.log("Shey contains vowels")
// }else{
//     console.log("false");
// }


// function perfectNumber(number){
//     let sum = 0 ;
//     for(let i=1; i<number;i++){
//         if(number%i===0){
//             sum+=i;
//         }
//     }
//     return sum;
// }

// let number=28;
// if(perfectNumber(number)===number){
//     console.log(`${number} is a perfect number.`)
// }else{
//     console.log(`${number} is not a perfect number.`)
// }


function perfectNumber(number){
    let sum=0;
    for(let i=1; i<number;i++){
        if(number%i===0){
sum+=i;
        }
    }
    return sum;
}

let number=208;
if(perfectNumber(number)===number){
    console.log(`${number} is a perfect number.`)
}else{
    console.log(`${number} is not a perfect number.`)
}



function perfectRoots(a,b,c){
    let underRoot=b*b-(4*a*c);
    let roots=[];

if(underRoot>0){
    let root1= (-b+Math.sqrt(underRoot))/(2*a);
    let root2= (-b-Math.sqrt(underRoot))/(2*a);
roots.push( root1,root2);
}else if (underRoot===0){
    let root=-b/(2*a);

    roots.push(root);
}

return roots;

}

let a = 1;
let b = -3;
let c = 3;

let roots = perfectRoots(a, b, c);
console.log("Roots:", roots);




function isPangram(str){
    let leter = new Set();
    for (let char of str){
        let lowerChar=char.toLowerCase();
        if(/[a-z]/.test(lowerChar)){
            leter.add(lowerChar);
        }
    } 
    return leter.size===26;
}

let sentence = "The quick brown fox jumps over the lazy dog";
if (isPangram(sentence)) {
    console.log("The sentence is a pangram.");
} else {
    console.log("The sentence is not a pangram.");
}


let numbers="12345";
let sum2=0;
for(let numb of numbers){
    let number2=parseInt(numb)
    sum2+=number2;
    
}
console.log(sum2);


let digit=22;
if(digit%5===0){
    console.log(`${digit} is divisible by 5`);
}else if(digit%11===0){
    console.log(`${digit} is divisible by 11`);
}else{
    console.log(`${digit} is not divisible by 5 & 11`);
}

let thisYr=2024;
if(thisYr%100===0){
    console.log(`${thisYr} is century yr`);
}
else{
    console.log(`${thisYr} is not century yr `);
}

let duck=false;
let strYr=thisYr.toString();
for(let i=1; i<strYr.length;i++){
if(strYr[i]==="0"){
duck=true;
break;
}
}

if(duck=true && strYr[0] !=="0" ){
    console.log(`${thisYr} is duck yr`);
}else{
    console.log(`${thisYr} is not duck yr`);
}

let phNo=7410529635;
let phNum = phNo.toString();
console.log(phNum.length);
if(phNum.length>"10"){
    console.log("please enter the write number");  
}

let sqNum=64;
let sqNum2=Math.sqrt(sqNum)
if(sqNum/sqNum2 === sqNum2){
    console.log(`${sqNum} is a perfect square number`)
}else{
    console.log(`${sqNum} is not a perfect square number`)
}

function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}

function lcm(a,b){
    return (a*b)/gcd(a,b);
}


let num1 = 12;
let num2 = 4;
let result = lcm(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is: ${result}`);

// Function to find the Greatest Common Divisor (GCD) using Euclid's algorithm
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Example usage:
let num3 = 12;
let num4 = 4;
let result1 = gcd(num3, num4);
console.log(`The GCD of ${num3} and ${num4} is: ${result1}`);


let crNum=1234567899639963;
let crNum1=crNum.toString();
if(crNum1.length == 16){
    console.log("valid credit card")
}else{
    console.log("Not valid credit card")
}

// let email=rjaaksshk@.com;
// let validEmail=false;
for(let i=0;i<email.length;i++){
    if(email[i]==@ && email[i]==. ){
        validEmail=true;
    }
}console.log("Not valid credit card")


let email = "rjaaksshk@.com";
let validEmail = false;

// Check for the presence of '@' and '.'
if (email.includes('@') && email.includes('.')) {
    // Split the email address into local part and domain part
    let parts = email.split('@');
    let localPart = parts[0];
    let domainPart = parts[1];

    // Check if local part and domain part are not empty
    if (localPart !== '' && domainPart !== '') {
        // Check if domain part has at least one '.' character after '@'
        if (domainPart.indexOf('.') !== -1) {
            validEmail = true;
        }
    }
}

if (validEmail) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
