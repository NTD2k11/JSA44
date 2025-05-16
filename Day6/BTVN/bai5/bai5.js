const students = [
    { name: "An", score: 7 },
    { name: "Bình", score: 8 },
    { name: "Châu", score: 9 },
]
let tong = 0;
for (let i = 0;i<students.length;i++) {
    tong+=students[i].score; 
}
let average= tong/students.length;
console.log("Điểm trung bình: " + average);