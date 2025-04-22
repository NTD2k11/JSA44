let input_a = Number(prompt('Mời bạn nhập số a: '))
let input_b = Number(prompt('Mời bạn nhập số b: '))
let input_c = prompt('Mời bạn nhập phép tính: ')

let plus = input_a + input_b
let minus = input_a - input_b
let multiplied = input_a * input_b
let divided = input_a / input_b

if (input_c = '+') { 
    alert(`Vậy tổng của a và b là: ${plus}`)
}
else if (input_c = '-') {
    alert(`Vậy hiệu của a và b là: ${minus}`)
}
else if (input_c === '*' || input_c === 'x')  {
    alert(`Vậy tích của a và b là: ${multiplied}`)
}
else if (input_c === ':' || input_c === '/') {
    alert(`Vậy thương của a và b là: ${divided}`)
}
else {
    alert('Phép tính không hợp lệ!')
}