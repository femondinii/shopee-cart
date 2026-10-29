import { prompt } from '../utils/prompt.js';
import { formatCurrency } from '../utils/format.js';

const getItemIndex = (userCart) => {
    const itemIndex = parseInt(prompt("Enter the item number: ")) - 1;
    if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= userCart.length) {
        console.log("Item not found in the cart.");
        return null;
    }
    return itemIndex;
};

const addItem = (userCart, item) => {
    userCart.push(item);
};

const removeItem = (userCart) => {
    const itemIndex = getItemIndex(userCart);
    if (itemIndex === null) return;

    userCart[itemIndex].quantity -= 1;
    if (userCart[itemIndex].quantity === 0) {
        userCart.splice(itemIndex, 1);
    }
};

const deleteItem = (userCart) => {
    const itemIndex = getItemIndex(userCart);
    if (itemIndex === null) return;
    userCart.splice(itemIndex, 1);
};

const calculateTotal = (userCart) => {
    const total = userCart.reduce((acc, item) => acc + item.subtotal(), 0);
    console.log(`\nTotal price: ${formatCurrency(total)}`);
};

const displayCart = (userCart) => {
    if (userCart.length === 0) {
        console.log("\nYour cart is empty.");
        return;
    }

    console.log("\nShopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${formatCurrency(item.price)} | ${item.quantity}x | Subtotal: ${formatCurrency(item.subtotal())}`);
    });
    console.log("");
    calculateTotal(userCart);
};

export {
    addItem,
    removeItem,
    deleteItem,
    displayCart
};
