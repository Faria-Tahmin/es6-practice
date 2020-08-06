const person ={ name : "Tim" , contact:'009912' , address: "kolabagan", friends:['mim','zim','kim'], favfood : 'pasta'}
const {contact,name,favfood,job} =person;
//const contact = person.contact;
//const name = person.name;
console.log(person.contact , person.name);
console.log(contact,name,favfood,job);
const friend=['aroshi','mika','babu','moynapakhi'];
const [first , ...restnames]=friend;
console.log(restnames);

const complexObject ={
    name: 'arham',
    info :
    {
        address :'manikgonj',
        mail: "arham@SpeechGrammarList.com"
    }
}
const {mail}= complexObject.info;
console.log(mail);