"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderStatus_1 = __importDefault(require("./OrderStatus"));
class OrderSaved {
    constructor(_id, recipe, _issuedOn, _status) {
        this._id = _id;
        this.recipe = recipe;
        this._issuedOn = _issuedOn;
        this._status = _status;
    }
    //#region Methods
    get id() {
        return this._id.value;
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
exports.default = OrderSaved;
//# sourceMappingURL=OrderSaved.js.map