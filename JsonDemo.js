var circleObj;
circleObj={
    "radius":10,
    "x":20,
    "y":25,
    "getArea":function()
    {
        return this.radius*this.radius*3.14;
    }
};
circleObj1={
    "radius":5,
    "x":100,
    "y":200,
    "getArea":function()
    {
        return this.radius*this.radius*3.14;
    },
    "getCircumstance":f1
};
function f1(){
    return this.radius*2*3.14
}
circleObj["getCircumstance"]=f1;
console.log(circleObj);
console.log(circleObj.getArea());
console.log(circleObj.radius);
console.log(circleObj["radius"]);
console.log(circleObj["x"]);
console.log(circleObj["y"]);
var myProp="radius";
console.log(circleObj[myProp]);
for(v in circleObj){
    console.log(v+" : "+circleObj[v]);
}
console.log(circleObj.getCircumstance());
console.log(circleObj1.getCircumstance());