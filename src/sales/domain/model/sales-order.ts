import {v4 as uuidv4} from  'uuid';
import {SalesOrderItem} from "./sales-order-item";
export class SalesOrder {
    private readonly _customerId: string;
    private readonly _id: string;
    private _items: SalesOrderItem[];

    constructor(customerId: string) {
        this._customerId = customerId;
        this._id = uuidv4();
        this._items = [];
    }

    addItem(productId: string, quantity: number, unitPrice: number): void {
        this._items.push(new SalesOrderItem(this._id, productId, quantity, unitPrice));
    }

    calculateTotalPrice = (): number => this._items.reduce((total: number, item:SalesOrderItem) => total + item.calculateItemPrice(), 0);

}