class Parent{
    constructor(){
        this.fatherName = 'Anderson';
    }
}



class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}

const baby1= new Child('Tom');
console.log(baby1 .getFullName());
const baby2 = new Child('Betty');
console.log(baby2);