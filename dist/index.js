"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// Create new user
function createUser(name, age) {
    return { id: (0, uuid_1.v4)(), name, age, cart: [] };
}
// Create new item
function createItem(name, price, description) {
    return { id: (0, uuid_1.v4)(), name, price, description };
}
// Add item to cart
function addToCart(user, item) {
    user.cart.push(item);
}
// Remove item from cart
function removeFromCart(user, itemId) {
    user.cart = user.cart.filter(item => item.id !== itemId);
}
// Remove quantity from cart
function removeQuantityFromCart(user, itemId, quantity) {
    let count = 0;
    user.cart = user.cart.filter(item => {
        if (item.id === itemId && count < quantity) {
            count++;
            return false;
        }
        return true;
    });
}
// Cart total
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
// Print the cart
function printCart(user) {
    let total = 0;
    user.cart.forEach(item => {
        console.log(`Item: ${item.name}, Price: ${item.price}`);
        total += item.price;
    });
    console.log(`Total Cart Value: ${total}`);
}
// Create a User
let user = createUser("Alice", 25);
// Create 3 Items
let itemA = createItem("Item A", 10, "Description of Item A");
let itemB = createItem("Item B", 20, "Description of Item B");
let itemC = createItem("Item C", 30, "Description of Item C");
// Add Item A to the user's Cart
addToCart(user, itemA);
// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);
// Add 3 Item B to the user's Cart
addToCart(user, itemB);
addToCart(user, itemB);
addToCart(user, itemB);
// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);
// Add 3 Item C to the user's Cart
addToCart(user, itemC);
addToCart(user, itemC);
addToCart(user, itemC);
// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);
// Remove all of Item B from the cart
removeFromCart(user, itemB.id);
// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);
// Remove 2 of Item C from the cart
removeQuantityFromCart(user, itemC.id, 2);
// Print Cart Contents and Total
printCart(user);