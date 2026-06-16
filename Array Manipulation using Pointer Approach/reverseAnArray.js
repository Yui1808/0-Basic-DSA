/*Interviewer ne tujhe ek array diya hai aur bola hai ki isko ulta karke do, bina kisi extra array ke (yaani $O(1)$ space mein).Maan le array yeh hai:let nums = [1, 2, 3, 4, 5];Tujhe isko badal kar banana hai: [5, 4, 3, 2, 1].*/


let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length-1;
while(start<end){
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
}
console.log(arr)