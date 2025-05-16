const student =[
    {name:'an',score:8},
    {name:'binh',score:9},
    {name:'chau',score:7},
]

diemcaonhat = student[0].score
hscaonhat = student[0]

for (i=1; i < student.length; i++){
    if(student[i].score > diemcaonhat){
        diemcaonhat = student[i].score
        hscaonhat = student[i]
    }
}

console.log('hs cao diem nhat' + hscaonhat + 'voi so diem la' + student[i].score);
