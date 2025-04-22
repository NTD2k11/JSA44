let input = Number(prompt('Nhập số năm: '))

if (input % 4 === 0 || input % 100 !== 0 && input % 400 === 0){
    alert(`Năm ${input} là năm nhuận`)
}
else{
    alert(`Năm ${input} không phải năm nhuận`)
}