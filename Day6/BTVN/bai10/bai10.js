const students = [
    { name: "An", score: 7 },
    { name: "Bình", score: 4 },
    { name: "Châu", score: 9 }
]
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 5) {
        students[i].status = 'dat'
    } else {
        students[i].status = 'ko dat'
    }
}
console.log(students.status);
