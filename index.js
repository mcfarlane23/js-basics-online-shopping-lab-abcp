var cart = [];

function getCart() {
 return cart;
}

function setCart(newCart) {
  cart = newCart;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(100*(Math.random()));
 var itemObj = {[item]: price};
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}
addToCart('orange')
addToCart('pear')
addToCart('quince')

function viewCart() {
  // write your code here
  var cartItems = [];
  if (cart.length === 0){
    console.log('your shopping cart is empty')

  }else if (cart.length === 1) {
    var printOneitem = `in your cart, ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)


  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
  }
}

function total() {
  var pricePerItemInCart = [];
 var totalPrice = 0
 
 for(var i = 0; i < cart.length; i++) {
 var itemPrice = cart[i][Object.keys(cart[i])]
   pricePerItemInCart.push(itemPrice)
   }
 
 for (var j =0; j<pricePerItemInCart.length; j++) {
   totalPrice = pricePerItemInCart[j]+=totalPrice
 }
 return totalPrice
}
total(cart)
  // write your code here


function removeFromCart(item) {
  // write your code here

}
function placeOrder(cardNumber) {
  // write your code here
  if (!creditCard) {
     console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
 }
