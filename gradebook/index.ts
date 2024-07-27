type typeGetAverage = (scores: number[]) => number;

const getAverage: typeGetAverage = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}


function getGrade(score: number): string {
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

function hasPassingGrade(score: number): boolean {
    return getGrade(score) !== "F";
}


function studentMsg(totalScores: number[], studentScore: number): string {
    const avg = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const msg = (hasPassingGrade(studentScore)) ? "passed" : "failed";

    return `Class average: ${avg}. Your grade: ${grade}. You ${msg} the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));