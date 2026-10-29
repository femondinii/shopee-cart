import selectItem from './services/item.js';
import * as cartService from './services/cart.js';
import { prompt } from './utils/prompt.js';
import stock from './stock.js';

const cart = [];

const menuOptions = () => {
    while (true) {
        console.log("\nMenu Options:");
        console.log("1. View Cart");
        console.log("2. Add Item to Cart");
        console.log("3. Remove Item from Cart");
        console.log("4. Delete Item from Cart");
        console.log("5. Exit\n");

        const option = parseInt(prompt("Select an option: "));

        switch (option) {
            case 1:
                cartService.displayCart(cart);
                prompt("\nPress Enter to back to the menu...");
                continue;
            case 2:
                const item = selectItem(stock);
                cartService.addItem(cart, item);
                continue;
            case 3:
                cartService.displayCart(cart);
                cartService.removeItem(cart);
                continue;
            case 4:
                cartService.displayCart(cart);
                cartService.deleteItem(cart);
                continue;
            case 5:
                console.log("Exiting...");
                process.exit(0);
            default:
                console.log("Invalid option. Please try again.");
                continue;
        }
    }
};

const main = () => {
    console.log("=================================");
    console.log("==== Welcome to Shopee Cart! ====");
    console.log("=================================");
    menuOptions();
};

main();
