var emp1;

function computeTotal(){
    return this.examMark1+this.examMark2+this.examMark3;
}
function computeAverage(){
    return parseInt(this.getTotal()/3);
}
function computeRating(){
    let average=this.getAverage();
    if(average >=90 && average < 100){
        return "A+";
    }
    if(average >=80 && average < 89){
        return "A";
    }
    if(average >=70 && average < 79){
        return "B+";
    }
    if(average >=60 && average < 69){
        return "B";
    }
    if(average >=50 && average < 59){
        return "C";
    }
    if(average >=0 && average < 49){
        return "Failed";
    }
}
emp1={
    "rollNumber":1,
    "name":"janu",
    "examMark1":30,
    "examMark2":40,
    "examMark3":90,
    "getTotal":computeTotal,
    "getAverage":computeAverage,
    "getRating":computeRating
}
console.log(emp1.getTotal());
console.log(emp1.getAverage());
console.log(emp1.getRating());