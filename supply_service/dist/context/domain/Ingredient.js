"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingredient {
    constructor(_id, quantity) {
        this._id = _id;
        this.quantity = quantity;
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
}
exports.default = Ingredient;
//# sourceMappingURL=Ingredient.js.map