let input = Number(prompt('Nhập điểm trung bình của bạn: '))

if (input < 5) {
    alert("học lực của bạn là yếu")
}
else if (input >= 5 || input < 6.5) {
    alert('học lực của bạn là trung bình')
}
else if (input >= 6.5 || input < 8) {
    alert('học lực của bạn là khá')
}
else if (input >= 8) {
    alert('học lực của bạn là giỏi')
}