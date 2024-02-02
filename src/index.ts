import { v4 as uuidv4 } from 'uuid';

class Item {
    private _id: string = uuidv4();
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name: string, price: number, description: string) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}


class User {
    private _id: string = uuidv4();
    private _name: string;
    private _age: number;
    private _cart: Item[] = [];

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }



    get cart(): Item[] {
        return [...this._cart];
    }


    addToCart(item: Item): void {
        this._cart.push(item);
    }


    removeFromCart(itemId: string): void {
        this._cart = this._cart.filter(item => item.id !== itemId);
    }


    removeQuantityFromCart(itemId: string, quantity: number): void {
        let count = 0;
        this._cart = this._cart.filter(item => {
            if (item.id === itemId && count < quantity) {
                count++;
                return false;
            }
            return true;
        });
    }


    cartTotal(): number {
        return this._cart.reduce((total, item) => total + item.price, 0);
    }


    printCart(): void {
        this._cart.forEach(item => console.log(`${item.name}: $${item.price}`));
        console.log(`Total: $${this.cartTotal()}`);
    }
}



class Shop {
    private _items: Item[] = [];

    constructor() {
        this._items.push(new Item('Rose Quartz', 25.00, "Bring more love, harmony and peace"));
        this._items.push(new Item('Tigers Eye', 25.00, "Offers protection, personal power and determination"));
        this._items.push(new Item('lapis Lazuli', 20.00, "Welcome wisdom, intuition, and clarity"));
    }

    get items(): Item[] {
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