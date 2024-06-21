"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IngredientSupplied {
    constructor(_ingredientId, _quantity) {
        this._ingredientId = _ingredientId;
        this._quantity = _quantity;
    }
    //#region Methods
    get ingredientId() {
        return this._ingredientId.value;
    }
    get quantity() {
        return this._quantity.value;
    }
}
exports.default = IngredientSupplied;
//# sourceMappingURL=IngredientSupplied.js.map