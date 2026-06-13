let string = "zoroz";
let start = 0;
let end = string.length-1;
let flag = true;

while(start<=end){
   if(string[start]!==string[end]){
     flag = false;
     break;
   }
   

   start++
   end--

}

if(flag){
    console.log(`string ${string} is Pallindrome`);
}
else{
    console.log(`string ${string} is not Pallindrome`);
}