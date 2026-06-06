// // Question 2: Find if an Element Exists (Linear Search)
// Yeh sawal tujhe seekhayega ki array mein kisi cheez ko dhoodhte kaise hain aur dhoodhne ke baad loop ko beech mein kaise rokte hain.

// Problem: Ek array hai [10, 25, 45, 60, 75] aur tujhe ek target number diya hai target = 60. Tujhe batana hai ki yeh number array mein hai ya nahi. Agar hai, toh kaunse index par hai?

// Result kya aana chahiye: Element found at index 3 (Agar target 99 hota jo array mein nahi hai, toh output aana chahiye Element not found).

let arr = [10, 25, 45, 60, 75];
let target = 60;
let flag = false;
let index;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target){
       flag= true
       index = i;
       break;
    }
   
}
if(flag===true){
    console.log(`Target: ${target} found at index ${index}`)
}
else{
    console.log(`Target ${target} not found  `)
}



