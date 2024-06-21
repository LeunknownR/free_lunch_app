"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecipeOrderSaved {
    constructor(_id, _name, _image) {
        this._id = _id;
        this._name = _name;
        this._image = _image;
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
    get name() {
        return this._name.value;
    }
    get image() {
        return this._image.value;
    }
}
exports.default = RecipeOrderSaved;
//# sourceMappingURL=RecipeOrderSaved.js.map