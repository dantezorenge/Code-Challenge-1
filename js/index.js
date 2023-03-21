//Grade Covertion Function

function getStudentGrade() {
let marks=parseInt(grade.value);
if (marks=>101){
    grade="Please input valid marks";}
    else if(marks=>80){
        grade="Congratulations your grade is A"
    }
    else if(nmarks=>60){
        grade="your grade is B";}
    else if(marks=>49){
        grade="your grade is C"}
    else if(marks=>40){
        grade="your grade is D"}
    else if(marks<40,marks>0){
        grade="Your grade is E"}
    else{
        grade="Kindly input correct marks"
    }
//the return value
console.log(grade)
gradeShow.innerText='${grade}'}

//Speed Detector Function

speed = int(input("Enter the speed of the car: "))

if (speed < 70)
   { print("Ok")}
else
    demerit_points = (speed - 70) // 5
    if (demerit_points > 12)
        {print("License suspended")}
    else
    {print("Points:", demerit_points)}



// function for net pay salary
function NetSalaryCalctulator(){
    const basicSalary=parseInt(document.getElementById("basic-salary").value);
    const taxbrackets=[{upperLimit:12298,rate:0},{upperLimit:23885,rate:0.1},{upperLimit:35472,rate:0.15}];
    const payee=taxBrackets.reduce((acc,bracket)=>acc+bracket.rate*Math.max(Math.min(basicSalary)))
    const nhifRates=[0,150,300,500,600,750,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700]
    const nhif=nhifRates[Math.ceil(basicSalary/10000)];
    const nssf =Math.min(basicSalary*0.06+benefits*0.06, 200);
    const grossSalary=basicSalary+benefits;
    const netSalary=grossSalary-(payee+nhif+nssf)
}

