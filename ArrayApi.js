var arr1=["HCL","WIPRO","INFOSYS","CTS"];
var arr2=[30,25,45,10,17,100,200];
arr1.sort();
console.log(arr1);
arr2.sort();
console.log(arr2);

var helper=function(a,b){
    return a-b;
}
arr2.sort(helper);
console.log(arr2);