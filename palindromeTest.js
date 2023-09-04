// Program to check whether a palindrome can be created from the given string
function solution(inputString) {
    let stringArray=inputString.split('');
    let counter=0;
    let pivot=stringArray[0];
    for(let i=0;i<stringArray.length;i++){
        if(pivot==='#'){
            continue;
        }
        else{
            if(i<stringArray.length-1){
                let val=stringArray.indexOf(stringArray[i],i+1);
                if(val!==-1){
                    stringArray[i]='#';
                    stringArray[val]='#';
            }
            }

        }
    }
    console.log(stringArray);
    for(let i=0;i<stringArray.length;i++){
        if(stringArray[i]==='#'){
            continue;
        }
        else
        counter++;
    }
    if(counter===0||counter===1){
        console.log("True");
        return true;
    }
    else 
    console.log("False");
    return false;
}
solution('aabb');
solution('aabcc');
solution('xyzx');