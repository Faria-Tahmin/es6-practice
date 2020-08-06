function add1(num1, num2) {
    return num1 + num2;
}

let total1 = add1(20, 30);
console.log(total1);

/*function add(num1 ,num2)
{
    return num1 + num2 ;
}

const total = add(20);
console.log(total);*/
function add2(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    } return num1 + num2;
}

const total2 = add2(20);
console.log(total2);

function add3(num1, num2) {
    
        num2 = num2||10 ;
        return num1 + num2;
}

const total3 = add3(20);
console.log(total3);

function add4(num1, num2=80) {
  
     return num1 + num2;
}

const total4 = add4(20);
console.log(total4);