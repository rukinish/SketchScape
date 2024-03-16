//Like button
let count = 0;

function myFunction(i) {
  count++;

  if (count % 2 == 1) {
    document.getElementById("heart" + i).style.color = "red";
  } else {
    document.getElementById("heart" + i).style.color = "black";
  }
}

//Slide Show
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}

// //ADD and remove items from the CART

let cartArray = [];
let total = 0;
let cartCounter = 1;
let cartIndex = 0;

function cart(name, price) {
  // Check if the item is already in the cart
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i].name === name) {
      alert("This item is already in the cart!");
      return;
    }
  }

  // create new item container
  const itemCont = document.createElement("div");
  
  let index = cartIndex;
  cartIndex++;

  itemCont.classList.add("itemCont");

  // create name, price, and quantity containers
  const itemName = document.createElement("div");
  const itemPrice = document.createElement("div");
  const itemQuantity = document.createElement("div");
  itemName.classList.add("itemName");
  itemPrice.classList.add("itemPrice");
  itemQuantity.classList.add("itemQuantity");

  // create quantity input
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = 1;
  quantityInput.max = 10;
  quantityInput.value = 1;
  quantityInput.style.width = "30px";
  quantityInput.style.padding = "3px";
  quantityInput.addEventListener("change", function () {
    total = updateTotal();
  });

  // create remove button
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.classList.add("bx", "bxs-trash-alt");
  removeButton.style.color = "#ffffff";
  removeButton.addEventListener("click", e => { 
      for(let i=0; i<cartArray.length; i++) {
        if(cartArray[i].index==index) { cartArray.splice(i, 1); break; }
      }
    itemCont.remove(); 
    updateTotal();
    const emptyText = document.getElementById("emptyText");
    if(emptyText) emptyText.style.display = "none";
  });
 
  // set content for name, price, and quantity containers
  itemName.textContent = `${name}:`;
  itemPrice.textContent = `$${price}`;
  itemQuantity.textContent = `Quantity: `;
  itemQuantity.appendChild(quantityInput);

  // add name, price, and quantity containers to item container
  itemCont.appendChild(itemName);
  itemCont.appendChild(itemPrice);
  itemCont.appendChild(itemQuantity);
  itemName.appendChild(removeButton);

  // add item container to cartItem
  const cartItem = document.getElementById("cartItem");
  cartItem.appendChild(itemCont);

  // add item to cart array
  cartArray.push({name, price, quantityInput, index});

  total = updateTotal();

  //remove "Your cart is empty"
  const emptyText = document.getElementById("emptyText");
  if (emptyText) {
    emptyText.style.display = "none";
    
  }
}

/*Calculates the total inside the cart*/
function updateTotal() {
  let newTotal = 0;
  cartArray.forEach((item) => {
    newTotal += Number(item.price) * Number(item.quantityInput.value);
  });
  const totalText = document.getElementById("total");
  totalText.innerHTML = "$" + newTotal.toFixed(2);
  if (newTotal < 0) {
    alert("Total cannot be negative!"); /*Proceeds to the checkout if the total is not negative*/
  }
  return newTotal;
}

/*Invoice*/ 
function printInvoice() { 
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  
 /*Invoice table*/  
  let invoiceHTML = `
    <html>
      <head>
        <style>
        body{
          border:1px solid;
          padding-left:5%;
          width: 50%;
          height:90%;
          margin-left:25%;
          margin-top:5%;
          margin-bottom:5%;
        }
          table {
            border-collapse: collapse;
            width: 90%;
            font-size:20px;
            
            
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          
          }
          th {
            background-color: #415A77;
            color: white;
            
          }
      
          h1, h2 {
            text-align: center;
          }
          .invoice-header {
            margin-bottom: 20px;
            margin-top:5%;
          }
          .invoice-header p {
            margin: 0;
            font-size:18px;
          }
          .invoice-total {
            text-align: right;
            font-size: 20px;
          }
          .button{
            margin-top: 15px;
            padding-block: 8px;
            padding-inline: 20px;
            border: 1px solid #1B2638;
            background-color: white;
            border-radius: 30px;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            margin-left:85%;
            margin-top:5%;
            
          }
          .button:hover{
            transform: scale(1.1);
            background-color: #1B2638;
            color: white;
          }
          .reorder{
            margin-top:4px;
          }
        </style>
      </head>
      <body>
        <div class="invoice-header">
          <h1>Invoice</h1>
          <p>Date: ${date}</p>
          <p>Time: ${time}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          
          <tbody>
          
         
          
          
  `;
  
 
  // Check if the total is less than 0
  if (total == 0.00) {
    alert("No items added to the cart");
    return;
  }
  
  cartArray.forEach((item) => {
    const subtotal = Number(item.price) * Number(item.quantityInput.value); /*Calcuates the subtotal */
    invoiceHTML += `
      <tr> 
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>${item.quantityInput.value}</td>
        <td>$${subtotal.toFixed(2)}</td>
      </tr>
    `;
  });
  invoiceHTML += `
          </tbody>
        </table>
        <div class="invoice-total">
          <h2>Total: $${total.toFixed(2)}</h2>
        </div>
        <button class="button" onclick="location.href='Form.html';">Checkout</button>
        <button class="button reorder" onclick="location.href='SHOP.html';">Re-order</button>
      </body>
    </html>
  `;
  const invoiceWindow = window.open("", "Invoice");
  invoiceWindow.document.write(invoiceHTML);
  invoiceWindow.document.close();
  
}
