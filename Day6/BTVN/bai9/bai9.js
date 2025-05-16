const students = [
    { name: "An", score: 7 },
    { name: "Bình", score: 4 },
    { name: "Châu", score: 9 }
]
const hs_duoi_5 =[];
for (let i = 0; i < students.length; i++) {
    if (students[i].score < 5) {
        hs_duoi_5.push(students[i].name);
    }
}
console.log("Học sinh điểm dưới 5:");
for (let i = 0; i < hs_duoi_5.length; i++) {
    console.log(hs_duoi_5[i]);
}