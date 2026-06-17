let str = "A man, a Plan, a Canal: Panama   ";
let start = 0;
let end = str.length-1;
let flag = true;

while(start<end){

    while(str[start]==="," || str[start]===" " || str[start]===":"){
        start++
    }

    


    while(str[end ]==="," || str[end]===":" || str[end]===" " ){

    end--;

    }


    if(str[start])

    
    if(str[start].toUpperCase()!==str[end].toUpperCase()){
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

