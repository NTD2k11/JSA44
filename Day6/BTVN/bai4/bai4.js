const item = ['cam', 'xoai' ,'cam', 'oi','cam']
const count ={}

for(i = 0; i < item.length; i++){
    if(count[item[i]] === undefined){
        count[item[i]] = 1
    }else{
        count[item[i]] += 1
    }
}
console.log(count);
