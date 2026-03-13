function gradeCalculator(score) 
{
    if (score >= 90 && score <= 100) 
        {
        return "A";
    } else if (score >= 80) 
        {
        return "B";
    } else if (score >= 70) 
        {
        return "C";
    } else if (score >= 60) 
                                   {
        return "D";
    } else {
        return "F";
    }
}
let score = 75;
let grade = gradeCalculator(score);
console.log("Score:", score);
console.log("Grade:", grade);