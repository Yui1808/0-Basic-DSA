//  3. Move Zeroes (LeetCode 283)
let arr = [1, 4, 7, 0, 0, 3, 0, 5, 0];
let first = 0;
let second = 0;
while (second < arr.length) {
    if (arr[second] !== 0) {

        [arr[first], arr[second]] = [arr[second], arr[first]];

        first++;
    }
    
    second++;
}

console.log(arr)


