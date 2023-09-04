//is process of taking  function with multiple arguments and 
//turning it into a sequence of functions each with only a single argument.
//f(a,b,c)=> f(a)==>f(b)==>f(c)

//caluclating volume of a cuboid w/o currying
function calVol(ln,wd,ht){
    return ln*wd*ht;
}

//caluclating volume of a cuboid with currying
function calVolume(ln){
    return function (wd){
        return function(ht){
            return ln*wd*ht;
        }
    }
}
console.log("Volume without Currying : ",calVol(10,20,30));
// Volume without Currying :  6000
console.log("Volume with Currying : ",calVolume(10)(20)(30));
// Volume with Currying :  6000