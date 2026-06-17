let str = "A man, a Plan, a Canal: Panamk   ";
let start = 0;
let end = str.length-1;
let flag = true;

while(start<end){

    while(start<end && (str[start]==="," || str[start]===" " || str[start]===":") ){
        start++
    }

    


    while(end>start &&  (str[end ]==="," || str[end]===":" || str[end]===" ")){

    end--;

    }


    

    
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

