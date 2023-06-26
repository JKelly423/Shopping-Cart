/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cherry = {
  name: "Cherries",
  price: 3,
  quantity: 0,
  productId: 3858,
  image: "images/cherry.jpg"
}

const orange = {
  name: "Oranges",
  price: 4,
  quantity: 0,
  productId: 5814,
  image: "images/orange.jpg"
}

const strawberry = {
  name: "Strawberries",
  price: 2,
  quantity: 0,
  productId: 9081,
  image: "images/strawberry.jpg"
}

const products = [cherry, orange, strawberry];

const cart = []

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let locatedItem = products.find(function(product) {
    return product.productId === productId;
  });
  if (locatedItem.quantity === 0) {
    cart.push(locatedItem);
    locatedItem.quantity = 1;
  } else {
    locatedItem.quantity += 1;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let locatedItem = products.find(function(product) {
    return product.productId === productId;
  });
  if (locatedItem.quantity >= 0) {
    locatedItem.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
    let product = cart.find((product) => product.productId === productId);
    product.quantity -= 1;
    if (product.quantity === 0) {
        removeProductFromCart(productId)
    }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = cart.find((product) => product.productId === productId);
  product.quantity = 0;
  cart.splice(0, cart.length);
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;
  }
  return Number.parseFloat(sum.toFixed(2));
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = []
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let total = 0;
function pay(amount) {
  total += amount;
  return total - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
