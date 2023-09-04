//using extend keyword we inherit class,
//It set the Derived.prototype.[[Prototype]] to superClass.prototype

class Shape{
    constructor(len,width){
        this.len=len;
        this.width=width;
    }
    //static prop
    static name="Shape";

}
class Rectangle extends Shape{
    constructor(len,width){
        super(len,width);
    }
    //static prop
    static name="rectangle";
    //static method
    static getDesign(){
        return `this a Rectangle static Method`;
    }
    getArea()
    {
        return `The area of the Rectangle is: ${this.len*this.width}`;
    }
}
class Triangle extends Shape{
    constructor(len,width){
        super(len,width);
    }
    static getDesign(){
        return `this a Triangle static Method`;
    }
    getArea()
    {
        return `The area of the Triangle is: ${1/2*this.len*this.width}`;
    }
}
//accessing static props
console.log(Shape.name);
// Shape
console.log(Rectangle.name);
// rectangle
console.log(Rectangle.getDesign());
// this a Rectangle static Method
console.log(Triangle.getDesign());
// this a Triangle static Method

let Rect=new Rectangle(10,20);
let Tri=new Triangle(10,20);
console.log(Rect.getArea());
console.log(Tri.getArea());
// The area of the Rectangle is: 200
// The area of the Triangle is: 100