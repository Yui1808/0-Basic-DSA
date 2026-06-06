/*Problem: Ek array diya hai [5, 10, 15, 20, 25]. Tujhe iske saare numbers ko aapas mein jod kar total sum batana hai.

Result kya aana chahiye: Total Sum: 75*/

let arr = [5, 10, 15, 20, 25];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum+= arr[i];
}
console.log(sum)