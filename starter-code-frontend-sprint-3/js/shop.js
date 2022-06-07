// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let product of products){
    if (product.id === id){
      cartList.push(product)
    }
  }
  let text = '';
  for (let product of cartList) {
    text += product.name + ', ';
  }
  //console.log(text)
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
  let total = 0;
  for (let added of cartList) {
    total += added.price;
  }
  //console.log(total)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  let cart = [];

  for (let list of cartList) {

    if (cart.length > 0) {
      let found = false;
      let j = 0;

      while (!found && j < cart.length) {
        if (list.name === cart[j].name) {
          cart[j].quantity += 1;
          cart[j].subtotal = cart[j].quantity * cart[j].price;
          found = true
        }
        j++
      }

      if (!found){
        let product = list;
        product.quantity = 1;
        product.subtotal = product.price * product.quantity;
        cart.push(product);
      }
    } else {
      let product = list;
      product.quantity = 1;
      product.subtotal = product.price * product.quantity;
      cart.push(product);
    }
  }
  //console.log(cart);
  applyPromotionsCart(cart);
}

// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
  for (let list of cart){
    if (list.id === 1 && list.quantity >= list.offer.number) {
      let discount = 1-(list.offer.percent/100);
      list.subtotalWithDiscount = list.subtotal*discount;
    }

    if (list.id === 3 && list.quantity >= list.offer.number) {
      let discount = 1-(list.offer.percent/100);
      list.subtotalWithDiscount = list.subtotal*discount;
    }
  }
  //console.log(cart);
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	printCart();
}