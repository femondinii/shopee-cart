import { prompt } from '../utils/prompt.js';
import { formatCurrency } from '../utils/format.js';

const displayItemStock = (items) => {
    console.log("\nAvailable Items in Stock:");
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Price: ${formatCurrency(item.price)} | Available: ${item.available_stock}`);
    });
    console.log("");
};

const selectItem = (items) => {
    displayItemStock(items);

    let itemIndex, quantity;

    while (true) {
        itemIndex = parseInt(prompt("Select an item by its number: ")) - 1;
        quantity = parseInt(prompt("Enter the quantity: "));

        if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= items.length) {
            console.log("\nInvalid item selection. Selection must be between 1 and " + items.length + ".\n");
            continue;
        }

        if (isNaN(quantity) || quantity <= 0 || quantity > items[itemIndex].available_stock) {
            console.log("\nInvalid quantity selection. Selection must be between 1 and " + items[itemIndex].available_stock + ".\n");
            continue;
        }

        items[itemIndex].available_stock -= quantity;
        break;
    }

    const { price, name } = items[itemIndex];

    return {
        name,
        price,
        quantity,
        subtotal() { return this.price * this.quantity; }
    };
};

export default selectItem;
