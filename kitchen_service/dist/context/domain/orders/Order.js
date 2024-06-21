"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderId_1 = __importDefault(require("./OrderId"));
const OrderIssuedOn_1 = __importDefault(require("./OrderIssuedOn"));
const OrderStatus_1 = __importDefault(require("./OrderStatus"));
class Order {
    constructor(_id, _recipeId, _issuedOn, _status) {
        this._id = _id;
        this._recipeId = _recipeId;
        this._issuedOn = _issuedOn;
        this._status = _status;
    }
    static Create(recipeId) {
        return new Order(OrderId_1.default.Create(), recipeId, OrderIssuedOn_1.default.Issue(), OrderStatus_1.default.InProgress());
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
    get recipeId() {
        return this._recipeId.value;
    }
    get issuedOn() {
        return this._issuedOn.value;
    }
    get status() {
        return this._status.value;
    }
    dispatch() {
        this._status = OrderStatus_1.default.Dispatched();
    }
}
exports.default = Order;
//# sourceMappingURL=Order.js.map