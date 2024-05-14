interface type {
    Name:string , Age:number , Class:number , ownhouse:boolean
}

let object : type = {Name : "Hassaan Khan" , Class : 12 , Age : 18 , ownhouse : false};

console.log ("\nBelow is the Information Stroed In Object \n");
console.log (`My Name is ${object.Name}`);
console.log (`I'm ${object.Age} Years old`);
console.log (`I Study in class ${object.Class}`);
console.log (`Do I own a House? \nThe answer is ${object.ownhouse}`);