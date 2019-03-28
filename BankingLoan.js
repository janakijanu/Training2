var loanObject={
    "id":1001,
    "customer Name":"janu",
    "loan Amount":45000,
    "interestRate":0.14,
    "duration":12,
    "repayments":[],
    "addRepayment":function(rp){
        this.repayments.push(rp)
        console.log(this.repayments);
    },
    "getBalanceToBePaid":function(){

    },
    "getPaidAmount":function(){

    }
}
function Repayment(month,year,amount){
    this.PaymentMonth=month;
    this.PaymentYear=year;
    this.PaymentAmount=amount;
}