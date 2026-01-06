const food1 = document.getElementById("popcorn");
const food2 = document.getElementById("soda");
const food3 = document.getElementById("candy");
const food4 = document.getElementById("nachos");
const food5 = document.getElementById("icecream");

const totalamount = document.getElementById("total-span");
const cart = document.getElementById("shopping-cart");

function addpopcorn () {
    totalamount.textContent = Number(totalamount.textContent) + 4.50;
    cart.textContent = cart.textContent + " popcorn ";
}
function addsoda () {
    totalamount.textContent = Number(totalamount.textContent) + 2.50;
        cart.textContent = cart.textContent + " soda ";
}
function addcandy () {
    totalamount.textContent = Number(totalamount.textContent) + 1.75;
        cart.textContent = cart.textContent + " candy ";
}
function addnachos () {
    totalamount.textContent = Number(totalamount.textContent) + 5.00;
        cart.textContent = cart.textContent + " nachos ";
}
function addicecream () {
    totalamount.textContent = Number(totalamount.textContent) + 3.25;
        cart.textContent = cart.textContent + " icecream ";
}

food1.addEventListener("click", addpopcorn)
food2.addEventListener("click", addsoda)
food3.addEventListener("click", addcandy)
food4.addEventListener("click", addnachos)
food5.addEventListener("click", addicecream)