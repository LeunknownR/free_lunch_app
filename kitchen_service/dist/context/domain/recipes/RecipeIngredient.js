"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecipeIngredient {
    constructor(_id, _label, _quantity) {
        this._id = _id;
        this._label = _label;
        this._quantity = _quantity;
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
    get label() {
        return this._label.value;
    }
    get quantity() {
        return this._quantity.value;
    }
}
exports.default = RecipeIngredient;
//# sourceMappingURL=RecipeIngredient.js.map