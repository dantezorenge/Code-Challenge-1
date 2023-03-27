const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function() {
  const markInput = document.getElementById("mark");
  const mark = parseInt(markInput.value);
  let grade;
  if (mark > 79) {
    grade = "A";
  } else if (mark >= 60 && mark <= 79) {
    grade = "B";
  } else if (mark >= 50 && mark <= 59) {
    grade = "C";
  } else if (mark >= 40 && mark <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }
  const gradeResult = document.getElementById("grade-result");
  gradeResult.textContent = `The grade for mark ${mark} is ${grade}`;
});
