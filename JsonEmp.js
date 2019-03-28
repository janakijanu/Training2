var emp1,emp2,emp3;

function computeAllowance(){
    switch(this["emp grade"]){
        case 'A':return this["basic salary"]*0.28;
        case 'B':return this["basic salary"]*0.15;
        case 'C':return this["basic salary"]*0.12;
    }
}
function computeTax(){
    return this["basic salary"]*0.1;
}
function computeNet(){
    return this.getAllowance()+this["basic salary"]-this.getTax();
}
emp1={
    "emp id":101,
    "emp name":"janu",
    "emp gender":"F",
    "basic salary":30000.00,
    "emp grade":"A",
    "getAllowance":computeAllowance,
    "getTax":computeTax,
    "getNetSalary":computeNet
}
// for(v in emp1){
//     console.log(v+" : "+emp1[v]);
// }
console.log(emp1.getAllowance());
console.log(emp1.getTax());
console.log(emp1.getNetSalary());
console.log(emp1["getNetSalary"]());