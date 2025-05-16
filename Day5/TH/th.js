let input1 =prompt('mời khai báo giá trị 1: ') 
let input2 =prompt('mời khai báo giá trị 2: ') 
let input3 =prompt('mời khai báo giá trị 3: ') 
let input4 =prompt('mời khai báo giá trị 4: ') 
let input5 =prompt('mời khai báo giá trị 5: ') 

let favorite = []
favorite.push(input1,input2,input3,input4,input5)
console.log(favorite)




// bài2
Numbers = [42,17,89,35,56,78,24,66,10,35]
console.log(`${Numbers[0]} + ${Numbers[1]} + ${Numbers[2]} + ${Numbers[4]} + ${Numbers[5]} + ${Numbers[6]} + ${Numbers[7]} + ${Numbers[8]} + ${Numbers[9]}`);

let plus = 42+17+89+35+56+78+24+66+10+35
console.log(`${Numbers[0]} + ${Numbers[1]} + ${Numbers[2]} + ${Numbers[4]} + ${Numbers[5]} + ${Numbers[6]} + ${Numbers[7]} + ${Numbers[8]} + ${Numbers[9]} = ${plus}`);


// Numbers[0]+Numbers+[1]+Numbers[2]+Numbers[3]+Numbers[4]+Numbers[5]+Numbers[6]+Numbers[7]+Numbers[8]+Numbers[9]

let tong = Numbers[0] + Numbers[9]
console.log('tong = ' + tong);

let hieu = Numbers[0] - Numbers[9]
console.log('hieu = ' + hieu);

let tich = Numbers[0] * Numbers[9]
console.log('tich = ' + tich);

let thuong = Numbers[0] / Numbers[9]
console.log('thuong = ' + thuong);
