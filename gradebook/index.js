// average = sum of all scores / total number of scores
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
    if (score === 100) {
        return "A++";
      } else if (score >= 90) {
        return "A";
      } else if (score >= 80) {
        return "B";
      } else if (score >= 70) {
        return "C";
      } else if (score >= 60) {
        return "D";
      } else {
        return "F";
      }
    
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));


function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}


// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));


function studentMsg(totalScores, studentScore) {
   const avg =  getAverage(totalScores);
   const grade = getGrade(studentScore);
   const msg = (hasPassingGrade(studentScore)) ? "passed":"failed";
    
   return `Class average: ${avg}. Your grade: ${grade}. You ${msg} the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));