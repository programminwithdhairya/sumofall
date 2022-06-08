// sum of some given numbers using Javascript
const my_num = [1,2,3]
const num = my_num.reduce((previousValue , currentvalue)=>{
    return previousValue + currentvalue
}, 0)
console.log(num)