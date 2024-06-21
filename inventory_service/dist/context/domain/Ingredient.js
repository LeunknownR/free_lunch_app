"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingredient {
    constructor(_id, _label, _image, stock) {
        this._id = _id;
        this._label = _label;
        this._image = _image;
        this.stock = stock;
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
    get label() {
        return this._label.value;
    }
    get image() {
        return this._image.value;
    }
}
exports.default = Ingredient;
//# sourceMappingURL=Ingredient.js.map