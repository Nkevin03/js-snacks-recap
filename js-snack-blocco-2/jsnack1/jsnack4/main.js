const a = [1,2,3,4,5,6,7,8,9,10]
const b = [1,2,3,4]

 while(a, b){
    if(a.length > b.length){
        b.push(Math.floor(Math.random() * 10))
    } else if(a.length < b.length){
        a.push(Math.floor(Math.random() * 10))
    } else{
        break
    }
 }

console.log(b);