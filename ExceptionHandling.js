let someJSON={"age":30};
try {
    let user=JSON.parse(someJSON);
    if(!user.name){
        throw new SyntaxError;
    }
        console.log(user.name)
    }catch(err){
        console.log('JSON Erroer'+ err.message);
    }
//JSON ErroerUnexpected token o in JSON at position 1