// function add(a, b) {
// 	return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a,b) => a+b;

console.log(add(5, 3)); // 예상 결과: 8

//문제: 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.
// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a,b) => a-b;

// 함수 테스트
console.log(minus(60, 20));// 예상 결과: 40

// 문제: 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님. 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.
const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce("김철수",25));// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// 문제: 샌드위치 주문 함수를 작성하세요. 아래 콘솔 출력 결과를 보고 orderSandwich 함수를 화살표 함수로 구현하세요.
// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다


function orderSandwich(input){
    if(input === 'vegan'){
        return("🥖 + 🥬 + 🍅 + 🥑 + 🥒")
    }else{
        return ("🥖 + 🥬 + 🍅 + 🧀 + 🥓")
    }
}

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
console.log("🚀 ~ daysOfWeek:", daysOfWeek)

const students = ["철수", "영희", "민수", "지민"];
const me = students[0];
console.log("🚀 ~ me:", me);
