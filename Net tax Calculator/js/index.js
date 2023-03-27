

function NetSalaryCalctulator(){
    const basicSalary = parseInt(document.getElementById("basic-salary").value);
    const benefits = parseInt(document.getElementById("benefits").value);
    const taxBrackets = [
      { upperLimit: 12298, rate: 0 },
      { upperLimit: 23885, rate: 0.1 },
      { upperLimit: 35472, rate: 0.15 }
    ];
    const payee = taxBrackets.reduce((acc, bracket) => acc + bracket.rate * Math.max(Math.min(basicSalary - bracket.upperLimit, bracket.upperLimit), 0), 0);
    const nhifRates = [0, 150, 300, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];
    const nhif = nhifRates[Math.ceil(basicSalary / 10000)];
    const nssf = Math.min(basicSalary * 0.06 + benefits * 0.06, 200);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (payee + nhif + nssf);
  
    const netSalaryResult = document.getElementById("net-salary-result");
    netSalaryResult.textContent = `Your net salary is ${netSalary}.`;
  }
  
  const calculateBtn = document.getElementById("calculate-btn");
  calculateBtn.addEventListener("click", NetSalaryCalctulator);
  
