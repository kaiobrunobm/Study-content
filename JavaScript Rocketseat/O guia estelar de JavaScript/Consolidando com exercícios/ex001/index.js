

function getGrade (grade) {
const gradeA = grade >= 90 && grade <= 100
const gradeB = grade >= 80 && grade <= 89
const gradeC = grade >=70 && grade <= 79 
const gradeD = grade <= 69 && grade >= 60
const gradeF = grade < 60 && grade >= 0

let finalGrade;

if (gradeA){
    finalGrade = console.log('Sua nota é A')
} else if (gradeB) {
    finalGrade = console.log('Sua nota é B')
} else if (gradeC) {
    finalGrade = console.log('Sua nota é C')
} else if (gradeD) {
    finalGrade = console.log('Sua nota é D')
} else if (gradeF) {
    finalGrade = console.log('Sua nota é F')
} else {
    console.log('Nota inexistente no teste')
}

return finalGrade}

getGrade(101)
getGrade(100)
getGrade(89)
getGrade(79)
getGrade(60)
getGrade(0)
getGrade(-1)