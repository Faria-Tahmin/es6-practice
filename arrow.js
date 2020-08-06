function doubleIt(num){
    return num * 2;
}
const result1 = doubleIt(10);
console.log(result1);

const tripleIt = function threeTimes (num){
    return num * 3 ;

}
const result2 = tripleIt(100);
console.log(result2);

const add = x => x + 5 ;
const result3 = add(195);
console.log(result3);



const diff = (x,y)=> x-y ;
const result4 = diff(100,50);
console.log(result4);


const single =() => 1000;
const result5 = single();
console.log(result5);

const minArea =(height , width) =>{
    height = height * 2 ;
    width = width/ 4;
return height * width * 10;
}

const result6= minArea(10,4);
console.log(result6);
