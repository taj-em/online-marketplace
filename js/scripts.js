// Buisness Logic

function checkout(event) {
  event.preventDefault();
  const item = document.querySelector("input[name='item']:checked").value;
  const payment = document.getElementById("payment").value;
  const shipping = document.getElementById("shipping").value;

  // User Interface Logic

  let discount;
  if (item == 1) {
    discount = "25% Off";
  } else if (item == 2) {
    discount = "15% Off";
  } else if (item == 3) {
    discount = "10% Off";
  } else if (item == 4) {
    discount = "5% Off";
  }
  document.getElementById("yourItems").innerText = item + " - " + discount;
  document.getElementById("paymentInfo").innerText = payment;
  document.getElementById("shippingInfo").innerText = shipping;
  document.getElementById("receipt").removeAttribute("class");
}


window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", checkout)
})