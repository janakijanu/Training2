var arr1=[20,30,40,-90,100];
function sumHelper(s,e){
    return s+e;
}
function minHelper(m,e){
    if(m<e){
        return m;
    }
    return e;
}
function maxHelper(max,e){
    if(max>e){
        return max;
    }
    return e;
}
/*function avgHelper(x,y)
{
    return (x+y)/2;
}*/
function avgHelper(s,e,l,arr){}
var printElement=function(e){
    console.log(e);
}
var PositivePrintElement=function(e){
    if(e<0){
        return ;
    }
    console.log(e);
}
var squareHelper=function(e){
    return e*e;
}
function above100Checker(e){
    if(e>=100){
        return true;
    }
    return false;
}

var res=arr1.reduce(sumHelper);
console.log(res);


var res1 = arr1.reduce(minHelper);
console.log(res1);

var res2 = arr1.reduce(maxHelper);
console.log(res2);


// var res3 = arr1.reduce(avgHelper);
// console.log(res3);


var res4=arr1.forEach(printElement);
console.log(res4);

var res5=arr1.forEach(PositivePrintElement);
console.log(res5);

var res6=arr1.map(squareHelper);
console.log(res6);

var res7=arr1.some(above100Checker);
console.log(res7);

var res7=arr1.every(above100Checker);
console.log(res7);

var res8=arr1.find(above100Checker);
console.log(res8);

var res9=arr1.findIndex(above100Checker);
console.log(res9);