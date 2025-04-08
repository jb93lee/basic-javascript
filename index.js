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

function double(num){
    return (num*2);
}

let number = add(12, 345);
number = double(number);
console.log("🚀 ~ number:", number)

