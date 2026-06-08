/*Challenge 2: Find the Second Largest Element
Yeh sawal sikhayega ki ek sath do alag-alag conditions ko dimaag mein kaise track karte hain.

Problem: Ek array hai [12, 35, 1, 10, 34, 1]. Ismein sabse bada number 35 hai, par tujhe doosra sabse bada (Second Largest) yaani 34 dhoodhna hai.*/

let arr =  [12, 35, 1, 10, 34, 1];
let largest = -Infinity;
let secondLargest = -Infinity;
for(let i = 0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    }

    else if(secondLargest<arr[i] && arr[i]<largest){
            secondLargest = arr[i];
        }
}
console.log(secondLargest);