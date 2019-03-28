var myarray=[];

myarray.push(10);
myarray.push(20,30,40);
console.log(myarray);

myarray.unshift(100,300);
console.log(myarray);

myarray.pop();
console.log(myarray);

myarray.shift();
console.log(myarray);

myarray.splice(2,1);
console.log(myarray);

myarray.splice(2,0,3000,400);
console.log(myarray);

myarray.reverse();
console.log(myarray);
