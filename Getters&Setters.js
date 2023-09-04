// There are two Kinds of Object Properties
//data props
//accessor props: They are esentially functions that execute on getting and setting  value but 
//look like regular properties to an external code.
//Accessor propertie are represented by gettre and setter mothods in an object leteral they e denoted by get and set 
//Example:
let user={
    name:"Mj", 
    Surname:"Mir",
    get fullName(){
    return `${this.name} ${this.Surname}`},
    set fullName(value){
        [firstName,lastName]=value.split(' ');
        this.name=firstName;
        this.Surname=lastName;
    }
}

console.log(user.fullName);
user.fullName="Mujahidul Islam";
console.log(user.fullName);