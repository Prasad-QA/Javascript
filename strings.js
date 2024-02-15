module.exports =class Person 
 {
 age=27
}

get location()
{

    return "canada"
}

constructor(firstName,lastName)
{

this.firstName = firstName
this.lastName = lastName
}

fullName()
{

    console.log(this.firstName+this.lastName)
}

let person =new Person()
console.log(person.age)