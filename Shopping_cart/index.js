// Step 1: Create the Product constructor function
function Product(name, price) {
  // Private properties
  var _name = 'red';
  var _price = price;

  // Public method to get the product name
  this.getName = function() {
    return _name;
  };

  // Public method to get the product price
  this.getPrice = function() {
    return _price;
  };
}

// Step 2: Create the ShoppingCart constructor function
function ShoppingCart() {
  // Private property to hold items
  var _items = [];

  // Public method to add an item to the shopping cart
  this.addItem = function(product) {
    _items.push(product);
  };

  // Public method to remove an item from the cart by name
  this.removeItem = function(name) {
    _items = _items.filter(function(product) {
      return product.getName() !== name;
    });
  };

  // Public method to calculate the total price of items in the cart
  this.getTotal = function() {
    var total = 0;
    for (var i = 0; i < _items.length; i++) {
      total += _items[i].getPrice();
    }
    return total;
  };

  // Public method to get the name of items in the cart and their prices
  this.getCartItems = function() {
    var cartItems = [];
    for (var i = 0; i < _items.length; i++) {
      cartItems.push({
        name: _items[i].getName(),
        price: _items[i].getPrice()
      });
    }
    return cartItems;
  };
}

// Example usage:

// Create some products
var product1 = new Product('Product 1', 10);
var product2 = new Product('Product 2', 20);

// Create a shopping cart
var cart = new ShoppingCart();

// Add products to the cart
cart.addItem(product1);
cart.addItem(product2);

// Get the total price of items in the cart
console.log('Total Price:', cart.getTotal());

// Get the cart items
console.log('Cart Items:', cart.getCartItems());

// Remove a product from the cart
cart.removeItem('Product 1');

// Get the updated cart items
console.log('Updated Cart Items:', cart.getCartItems());
