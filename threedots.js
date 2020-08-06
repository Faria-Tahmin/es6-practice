const names = ['Aroshi' , 'faiza' , 'rifa'];
const name2 = ['Sina' ,'kaira' ,'meera','trina'];
const name3 = ['mani','mika','kuku','shimpaji','dolemon','gaga'];

const allNames = names .concat(name2).concat([12]).concat(name3);
console.log(allNames);
const allNames2 =[...names ,...name2 ,'Kashfia',...name3];
console.log(allNames2);

const physics = 85 ;
const math = 100 ;
const chemistry = 70 ;
const number=[85,100,70];
const maximum = Math.max(physics,math,chemistry);
const maxNum= Math.max(...number);
console.log(maximum);
console.log(maxNum);