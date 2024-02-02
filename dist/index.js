"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)();
        this._cart = [];
        this._name = name;
        this._age = age;
    }

    get cart() {
        return [...this._cart];
    }

    addToCart(item) {
        this._cart.push(item);
    }

    removeFromCart(itemId) {
        this._cart = this._cart.filter(item => item.id !== itemId);
    }

    removeQuantityFromCart(itemId, quantity) {
        let count = 0;
        this._cart = this._cart.filter(item => {
            if (item.id === itemId && count < quantity) {
                count++;
                return false;
            }
            return true;
        });
    }

    cartTotal() {
        return this._cart.reduce((total, item) => total + item.price, 0);
    }

    printCart() {
        this._cart.forEach(item => console.log(`${item.name}: $${item.price}`));
        console.log(`Total: $${this.cartTotal()}`);
    }
}
class Shop {
    constructor() {
        this._items = [];
        this._items.push(new Item('Rose Quartz', 25.00, "Bring more love, harmony and peace"));
        this._items.push(new Item('Tigers Eye', 25.00, "Offers protection, personal power and determination"));
        this._items.push(new Item('lapis Lazuli', 20.00, "Welcome wisdom, intuition, and clarity"));
    }
    get items() {
        return this._items;
    }
}

let shop = new Shop();
let user = new User("Apollo Jupiter", 30);

user.addToCart(shop.items[0]); 
user.printCart();

user.removeFromCart(shop.items[0].id);
user.printCart();

user.addToCart(shop.items[1]);
user.addToCart(shop.items[1]);
user.addToCart(shop.items[1]); 
user.removeQuantityFromCart(shop.items[1].id, 2); 
user.printCart();