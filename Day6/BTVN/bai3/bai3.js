const products = [
    {name: 'sach', quantity: 3},
    {name: 'but', quantity: 0},
    {name: 'thuoc', quantity: 5},
]

const sp_con_hang =[]

for(i=0; i<products.length; i++){
    if(products[i].quantity>0){
        sp_con_hang.push(products[i])
    }
}
console.log('cac sp con hang');
for(i=0; i>sp_con_hang.length; i++){
    console.log(sp_con_hang.name + 'so sp la: ' + sp_con_hang.quantity);
    
}

