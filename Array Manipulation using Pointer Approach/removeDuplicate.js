// 4. Remove Duplicates from Sorted Array (LeetCode 26)
let arr = [1,2,3,3,4,4,5,6];
for(let  i = 0; i < arr.length; i++ ){
    if(arr[i]===arr[i+1]){
        for(let j = i; j<arr.length -1 ; j++){
            arr[j] = arr[j+1];

        }
        arr.length--;
        i--;
    }
}
console.log(arr)


