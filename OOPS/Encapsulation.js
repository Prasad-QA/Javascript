class students {


constructor() {

let name,marks

}
getname() {

return this.name;

}
setname(name) {

this.name=name;

}


getmarks(){

return this.marks
}

setmarks(marks){

   this.marks =marks 
}

}



let stu = new students();

stu.setname("rebel");

console.log(stu.getname());

stu.setmarks(100);
console.log(stu.getmarks());



