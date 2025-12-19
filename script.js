
function increase(el) {
  let qty = el.previousElementSibling;
  let value = parseInt(qty.innerText);
  qty.innerText = value + 1;
}

function decrease(el) {
  let qty = el.nextElementSibling;
  let value = parseInt(qty.innerText);
  if (value > 1) {
    qty.innerText = value - 1;
  }
}

function addtoCart(){
    let  qty = document.getElementById("quantity");
  alert("your product has been added to the cart successfully");
}


