
class A {


constructor (colour){


    this.colour=colour;
}

printColour(){

console.log(this.colour);

}
}


class B extends A {

constructor(colour,dress) {
     super(colour);
   this.dress=dress;

}

ddress(){

    console.log(this.dress);
}


}

b = new B("black","this is a shirt")
b.printColour();
b.ddress();

a = new A("greeen")
a.printColour();

