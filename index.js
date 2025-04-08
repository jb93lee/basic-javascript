// console.log("hi");

const username = "홍길동";
console.log("🚀 ~ username:", username)
// console.log(username);

// username = "변경";
// console.log(username);

const age = 21;
console.log("🚀 ~ age:", age)
// console.log(age);

console.log("username type:", typeof username);
console.log("age type:", typeof age);

const bool = true;
console.log("🚀 ~ bool:", bool)
console.log("bool type:", typeof bool);

let today;
console.log("🚀 ~ today:", today)
console.log("today type:", typeof today);

today = 0;
console.log("🚀 ~ today:", today)
console.log("today type:", typeof today);

let a = null;
console.log("🚀 ~ a:", a)
console.log("a type:", typeof a);

a = 1;
console.log("🚀 ~ a:", a)
console.log("a type:", typeof a);


function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function greeting(username) {
    console.log("반갑습니다.", username, "님");
}

greeting("후츠릿");

function add(a,b){
    console.log(a+b);
    console.log(`두 숫자의 합은 ${a+b}입니다.`);
    return (a+b);
}

// function double(num){
//     return (num*2);
// }

const double = num => num*2;

let number = add(12, 345);
number = double(number);
console.log("🚀 ~ number:", number);

console.log("========================");

// let score = Number(prompt("점수 입력:"));
let score = 71;
// if (score >= 70){
//     console.log("합격");
// }else{
//     console.log("불합격");
// }

console.log(score>=70 ? "합격" : "불합격");

if (score >= 90) {
    console.log("A등급");
  } else if (score >= 80) {
    console.log("B등급");
  } else if (score >= 70) {
    console.log("C등급");
  } else {
    // console.log("D등급");
  }

const checkValidText = (userInput) => {
    // 유효성 체크하여 boolean 값 반환
    let  isValid = true;
    if (userInput) {
        isValid = true;
    } else {
        console.log("값을 입력하세요.");
        isValid = false;
    }
    return isValid;
}

console.log("checkValidText=>", checkValidText(""));