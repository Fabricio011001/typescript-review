import {SalesOrder} from "./sales/domain/model/sales-order";

const developer = "Developer";

export function  hello (who: string = developer) {
    return `Welcome, ${who}`;
}

let welcomeMessage: string = hello();

console.log("Functional Section");

console.log(welcomeMessage);

console.log("Object-Oriented Section");

const salesOrder = new SalesOrder("C001")
salesOrder.addItem("P001", 2, 100);
salesOrder.addItem("P002", 1, 200);
console.log(`Sales Order Total Price is ${salesOrder.calculateTotalPrice()}`);