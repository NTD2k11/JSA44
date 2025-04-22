let input = Number(prompt(`Mời nhập số tuổi của bạn: `))

if (input >= 18){
    alert(`Bạn đã đủ điều kiện để đi thi`)
}
else if (input <= 0){
    alert(`Lỗi dữ kiện`)
}
else if (input > 0 && input < 18){
    alert(`Bạn chưa đủ điều kiện để đi thi`)
}