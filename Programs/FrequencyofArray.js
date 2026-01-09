
//let arr= ["a","b","b","C","a"]

let arr= [1 , 2, 1, 2, 12]

let freq ={};


for(ch of arr){

    freq[ch] =(freq[ch] || 0 )+1 ;


}

console.log(freq);