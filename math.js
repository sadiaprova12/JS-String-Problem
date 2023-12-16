const result = Math.pow(3, 8); // pow mane hocche power. mane 2 the power 6 somthing bole thaki seta bujhano hoy.
// console.log(result);

const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
const gap = Math.abs(num1 - num2); // abs mane hocche: absolute
// console.log(gap);
if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay a part');
}


//-----------------
//
//-----------------

const number = 2.4598;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const number1 = 6.67;
const fullNum = Math.round(number1);
// console.log(fullNum);
const result2 = Math.ceil(2.00001);
// console.log(result2);
const result3 = Math.floor(456.259);
// console.log(result3);

//-----------------
// Random

// console.log(Math.random());
// const random = Math.random()*100;
// const random = Math.round(Math.random()*100);
// console.log(random);
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
// mdn Math
