function closure(a)
{
    var b;
    b=++a;
    function test(){
        return a+b;
    }
    return test;
}
var f1=closure(10);
console.log(f1());