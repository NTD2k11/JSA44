const students = [
    { name: "An", score: 7 },
    { name: "Bình", score: 9 },
    { name: "Châu", score: 10 },
]
const hs_tren_8 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].score > 8) {
        hs_tren_8.push(students[i].name);
    }
}
console.log(hs_tren_8);