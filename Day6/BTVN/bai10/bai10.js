const students = [
    { name: "An", score: 7 },
    { name: "Bình", score: 4 },
    { name: "Châu", score: 9 }
]
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 5) {
        console.log("Bạn " + students[i].name + " đã đậu với số điểm là " + students[i].score);
    } else {
        console.log("Bạn " + students[i].name + " đã rớt với số điểm là " + students[i].score);
    }
}