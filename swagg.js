let trolley=[];
let trolleyItem=document.getElementById('cart-num');
let counter = 0;

function addToTrolley(name,price){
    trolley.push(name,price);
    counter = counter + 1;
    trolleyItem.textContent = counter;
}