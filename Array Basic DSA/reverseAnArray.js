/*Challenge 1: Reverse an Array (In-Place)
Yeh sawal tera Two-Pointer Approach aur Swapping (adla-badli) ka darr hamesha ke liye khatam kar dega.

Problem: Ek array hai [1, 2, 3, 4, 5]. Tujhe isko ulta karke [5, 4, 3, 2, 1] banana hai.*/
let arr = [1, 2, 3, 4, 5];
let holder;
let start = 0;
let end = arr.length - 1;
while (start < end) {
    holder = arr[end];
    arr[end] = arr[start];
    arr[start] = holder;
    start++;
    end--;

}
console.log(arr)


