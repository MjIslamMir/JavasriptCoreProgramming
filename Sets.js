//Sets: what it means in mathematics
let greekSet= new Set([2,2,3,4,4]);
console.log(greekSet.keys());
//[Set Iterator] { 2, 3, 4 }
console.log(greekSet.values());
//[Set Iterator] { 2, 3, 4 }
console.log(greekSet.entries());
// [Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }

//adding element to Set
greekSet.add(10);
console.log(greekSet.entries());
//[Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 10, 10 ] }

//deleting element to set
greekSet.delete(10);
console.log(greekSet.entries());
//[Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }

//Checking the existance of value in Set

console.log(greekSet.has(2));//true
console.log(greekSet.has(5));///false

//checking Size of a set

console.log(greekSet.size)//3

//looping
//1 for-in and forEach work with sets
console.log(greekSet);
console.log("using for-in loop in Set")
for(let prop in greekSet.keys()){
    console.log(prop);
}

//clearing a set

greekSet.clear();
console.log(greekSet);//Set(0) {}


