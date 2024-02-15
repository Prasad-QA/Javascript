

var marks =Array(20,30,40,50,60)

console.log(marks[2])
marks[3]= 14
console.log(marks.length)
console.log(marks[3])
marks.push(120)

console.log(marks)
marks.pop()
console.log(marks)
console.log(marks.includes(70))
console.log(marks)
console.log(marks.indexOf(60))
var sum=0
for(i=0;i<marks.length;i++)
{

    sum=sum+marks[i]
}
console.log(sum)



//Reduce filter

let total=marks.reduce((sum,marks)=>sum+marks,0)
console.log(total)


let person = new Person("age")
console.log(person.age())