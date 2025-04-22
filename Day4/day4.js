// **, >, <, >=, <=, ==: chỉ so sánh về dữ liệu và k quan tâm đến kiểu dữ liệu, ===: so sánh các kiểu dữ liệu và dữ liệu !=, /, &&: ký hiệu "và" sẽ trả về nếu vế trc và sau dấu && đều là đúng, ||: ký hiệu "hoặc" sẽ trả về đúng nếu 1 trong 2 đúng hoặc cả 2 cùng đúng

// let a = `20`
// let b =  20
// let c = 100

// let result = a===b || b<c
// console.log(result)

/**
 * if(dieu_kien){
 *      code sẽ đc thực thi nếu dieu_kien là đúng
 * } else if(dieu_kien1) {
 *      code đây đc thực thi nếu dieu_kien1 là đúng    
 * } else {
 *      code đây đc thực thi nếu dieu_kien là sai   
 * }
 */

// let ny ="Linh"

// if (ny === "Linh"){
//     console.log(`Ny th1 của Đạt là: ${ny}`)
// } else if (ny === "Chi"){
//     console.log(`Ny th2 của Đạt là: ${ny}`)
// } else if (ny === "Lan"){
//     console.log(`Ny th2 của Đạt là: ${ny}`)
// } else{
//     console.log(`Đạt chx yêu ai tên là: ${ny}`)
// }


// bt
// let input=Number(prompt("Mời bạn nhập điểm: "))

// if (input < 5){
//     console.log(`Điểm của bạn là: F`)
// }
// else if (input >= 5 && input < 6){
//     console.log(`Điểm của bạn là: D`)
// }
// else if (input >= 6 && input < 7){
//     console.log(`Điểm của bạn là: C`)
// }
// else if (input >= 7 && input < 8){
//     console.log(`Điểm của bạn là: B`)
// }
// else if (input >= 8 && input < 9){
//     console.log(`Điểm của bạn là: A`)
// }
// else if (input >= 9){
//     console.log(`Điểm của bạn là: A+`)
// }
// else if (input <= 0 || input > 10){
//     console.log(`Bạn đã nhập sai điểm`)
// }



// bt 2


let a = Number(prompt(`Nhập số nguyên a: `)) 
let b = Number(prompt(`Nhập số nguyên b: `)) 
let c = Number(prompt(`Nhập số nguyên c: `)) 

if (0 <= a && c <= 1000){
    console.log(`Yes`)
} 
else{
    console.log(`No`)
}