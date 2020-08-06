class Grading {
    constructor(cName, cId, cNumber) {
        this.name = cName;
        this.id = cId;
        this.grades = cNumber;
        this.dept = 'IIT';
    }
}
const course1 = new Grading('DS','IT-1201','80');
const course2 = new Grading('OOP', 'IT-1203','90');
console.log(course1,'\n',course2);
console.log('\n',course2.name);