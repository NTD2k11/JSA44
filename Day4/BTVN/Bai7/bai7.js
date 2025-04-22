let input = Number(prompt('Hãy nhập số điện bạn đã dùng: '))
let output1 = input*1000
let output2 = input*1200
if (input >= 0 && input <= 50){
    alert(`Số tiền điện bạn phải trả là: ${output1}`)
}
else if (input > 50){
    alert(`Số tiền điện bạn phải trả là: ${output2}`)
}