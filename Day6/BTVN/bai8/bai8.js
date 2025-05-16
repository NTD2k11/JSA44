const cart = [
    { name: "Sách", price: 100, quantity: 2 },
    { name: "Bút", price: 10, quantity: 10 }
];
let sum = 0;
for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].quantity
}
console.log("Tổng tiền:" + sum);