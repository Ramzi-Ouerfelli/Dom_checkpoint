let products = document.getElementsByClassName("product");

function sum() {
  let sumElement = document.getElementById("tot");
  let priceElements = document.getElementsByClassName("price");
  let total = 0;

  for (let i = 0; i < priceElements.length; i++) {
    let priceText = priceElements[i].innerText;
    let priceValue = parseFloat(priceText.substring(0, priceText.length - 1));

    if (!isNaN(priceValue)) {
      total += priceValue;
    }
  }

  // Update the total in the "tot" element
  sumElement.innerText = total.toFixed(2); // Assuming you want to display two decimal places
}

// Call the sum function after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  sum();
});

for (let i = 0; i < products.length; i++) {
  const elem = products[i];
  const pu = parseFloat(elem.querySelector(".pu").textContent);

  elem.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "fas fa-heart":
      case "fas fa-heart red":
        e.target.classList.toggle("red");
        break;
      case "remove":
        elem.remove();
        sum(); // Update the sum after removing the element
        break;
      case "plus":
        elem.querySelector(".qt").textContent++;
        updatePrice(elem, pu);
        sum();
        break;
      case "minus":
        if (elem.querySelector(".qt").textContent > 0) {
          elem.querySelector(".qt").textContent--;
          updatePrice(elem, pu);
          sum();
        }
        break;
    }
  });
}

function updatePrice(elem, pu) {
  const quantity = parseInt(elem.querySelector(".qt").textContent);
  const totalPrice = pu * quantity;
  elem.querySelector(".price").textContent = totalPrice + "$";
}

function sum() {
  let sumElement = document.getElementById("tot");
  let priceElements = document.getElementsByClassName("price");
  let total = 0;

  for (let i = 0; i < priceElements.length; i++) {
    let priceText = priceElements[i].textContent;
    let priceValue = parseFloat(priceText.substring(0, priceText.length - 1));

    if (!isNaN(priceValue)) {
      total += priceValue;
    }
  }

  // Update the total in the "tot" element
  sumElement.textContent = total.toFixed(2); // Assuming you want to display two decimal places
}
