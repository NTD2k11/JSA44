/**
 * Vòng for: dùng 1 đoạn code lập đi lập lại cùng với 1 quy tắt, logic
 * for(vị trí khởi tạo, điều kiện để vòng lập chạy, sự thay đổi của vòng lập) {
 * 
 * 
 * }
 */

// // Tăng:
// for(let i = 0; i<10; i++){
//     console.log(i);
    
// }

// // TH1:
// for(let i = 0;i<=100 ; i++){
//     if(i % 2 === 0 && (i + 4) % 6){
//         console.log(i);
        
//     }    
// }

// // Giảm:
// for(let i = 100; i >= 1; i--){
//     console.log(i);
    
// }

// // Th2:
// for(i = 10; i>=0; i--){
//     if (i >= 5){
//         console.log(i);
//     }else{
//         console.log(10-i);
//     }
// }

// Công thức ghi thành chuỗi ngang:
/** s = ""
 *  s = s + 1 + " " thu đc s = "1 "
 *  s = s + 2 + " " thu đc s = "1 2 "
 *  s = s + 3 + " " thu đc s = "1 2 3"
 */ 

// kí hiệu xuống dòng của 1 chuỗi là: /n

// Th3:
s = ""
for (let i = 1; i <= 10; i++){
    s = s + i + " "

}
console.log(s);

let a = Number(prompt('Mời nhập số a: '))
let b = Number(prompt('Mời nhập số b lớn hơn a: '))
sum = a+b

for(let i = a; i <= b; i++){
    console.log(i);
    sum
    
}
