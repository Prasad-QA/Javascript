const Person = require("./strings")
class Pet extends Person

{

    get location()
    {

        return "bluecross"
    }
    constructor(firstName,lastName)
{
super(firstName,lastName)

}
}
let pet = new Pet("sam","jam")
pet.fullName()
console.log(pet.location)