// let ten_cua_object = {
//     ten_key1: value1,
//     ten_key2: value2,
//     ten_keyN: valueN,
//     ...
// }

let person1_name ='dat'
let person1_age = '14'
let person_address = 'dong nai'

let person1 = {
    name: 'dat' ,
    age: 12,
    address: 'dong nai'
};

let person2 = {
    name: 'huy',
    age: 11,
    address: 'hcm',
    ishandsome: true,
    class: {
        school: 'tri thuc',
        member: 11
    }

}

console.log(person1)

console.log(person2.class.member)

/**  - Truy cập giá trị vào thuộc tính:
 *      + console.log(ten_object.ten_key)
 * 
 *   - Khi khai báo thêm cập ky và value:
 *      + ten_object.new_key = new_value
 * 
 *   - 
 */


let plus = person1.age + person2.age
console.log(plus)
if (person1.age > person2.gae) {
    alert(`${person1.name} có tuổi lớn hơn ${person2.name}`)
}
else if(person1.age<person2.age){
    alert(`${person2.name} có tuổi lớn hơn ${person1.name}`)
}




// array: mảng dùng để lưu nhiều giá trị có chung thể loại với nhau
// let ten_mang = [value1,value2,value3, ....]

/** -Cách để truy cập các phần tử trong mảng: ten_mang:[index]
 *  +note: 0 <=index<=chiều dài mảng -1
 * 
 *  - Chiều dài của mảng: ten_mang.lenght
 *  - Tips truy cập vào phần tử cuối trong mảng: ten_mang[ten_mang.lenght -1]
 *  - Thêm 1 giá trị mới vào cuối mảng:  ten_mang.push(giá trị mới)
 */

let favorite = ['game','badminton','swim']
console.log(favorite)

//chiều dài mảng
console.log(favorite.length)

//truy cập theo index:
console.log(favorite[0])
console.log(favorite[1])
console.log(favorite[2])

//thêm giá trị ở cuối mảng
favorite.push('watch_ty');
console.log(favorite)

//xóa giá trị ở cuối mảng
favorite.pop();
favorite.pop();
console.log(favorite)