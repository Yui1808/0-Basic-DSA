/*Question 4: Count How Many Times a Number Appears (Frequency Count)
Yeh sawal check karega ki tu array mein kisi cheez ko dhoodh kar uska hissa (count) kaise rakh sakta hai.

Problem: Ek array hai [4, 5, 4, 6, 4, 7, 8] aur ek target number diya hai target = 4. Tujhe batana hai ki yeh 4 iss array mein kitni baar aaya hai.

Result kya aana chahiye: The number 4 appears 3 times*/

let arr = [4, 5, 4, 6, 4, 7, 8];
let target = 4;
let frequency = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]===target){
        frequency++
    }
}
console.log(frequency)
