var emp={
    "name":"janu"
}
var stud={
    "name":"sheela"
}
function printUpper(){
    console.log(this.name.toUpperCase());
}
function countLength(a,b){
    console.log(this.name.length+a+b);
}
function doPrint(e){
    console.log(e);
}
function printSum(x,y){
    console.log("The sum of two numbers is "+(x+y));
}
printUpper.call(emp);
printUpper.call(stud);

countLength.call(emp,2,3);
countLength.call(stud,5,7);

countLength.apply(emp,[2,3]);
countLength.apply(stud,[5,7]);

var res=doPrint.bind(null,10);
res();

var res1=printSum.bind(null,500,600);
var bindVariable=printSum.bind(null,20,30);

res1();
bindVariable();