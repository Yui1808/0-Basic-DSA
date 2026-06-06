// // Question 1: Count Even and Odd Numbers in an Array
// Yeh sawal tujhe seekhayega ki array ke ek-ek dabbe ke andar jaakar check kaise karte hain.

// Problem: Ek array diya hai [2, 5, 8, 11, 14, 17, 20]. Tujhe count karna hai ki ismein kitne numbers Even (sam) hain aur kitne Odd (visham) hain.

// Result kya aana chahiye: Even numbers: 4, Odd numbers: 3

let arr = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;
let oddCount = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log(`Number of even digits in arr: ${evenCount} and number of odd digits in arr: ${oddCount}`)

