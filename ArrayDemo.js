var prices=[10,20,'HCL','Chennai',true];
for(i=0;i<prices.length;i++){
    console.log(prices[i]);
}
console.log(prices[0]);
console.log(prices["0"]);
for(v in prices){
    console.log(v+" : "+prices[v]);
}
prices[5]="Sez";
prices[10]="false";
for(i=0;i<prices.length;i++){
    console.log(prices[i]);
}
prices[11]=function(){
    console.log("Hello");
}
for(v in prices){
    console.log(v+" : "+prices[v]);
}
prices[12]={
    "radius":10,
    "getArea":function(){
        return this.radius*this.radius*3.14;
    }
}
for(v in prices){
    if(typeof prices[v]== 'function')
    prices[v]();
    if(typeof prices[v]== 'object')
    console.log(prices[v].getArea());
    console.log(v+" : "+prices[v]);
}