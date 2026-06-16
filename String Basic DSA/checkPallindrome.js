let str = "a man, a plan, a canal: panama";
let start = 0;
let end = str.length-1;
let flag = true;

while(start<end){

    if(str[start]==="," || str[start]===":" || str[start]===" " ){

    start++

    }


    if(str[end ]==="," || str[end]===":" || str[end]===" " ){

    end--;

    }

    
    if(str[start]!==str[end]){
        flag = false;
        break;
    }
    
    start++;
    end--


}

if(flag){
    console.log("yes")
}

else{
    console.log("no")
}