"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    constructor(_id, _name, _description, _image, _ingredients) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._image = _image;
        this._ingredients = _ingredients;
    }
    //#region Methods
    get id() {
        return this._id.value;
    }
    get name() {
        return this._name.value;
    }
    get description() {
        return this._description.value;
    }
    get image() {
        return this._image.value;
    }
    get ingredients() {
        return this._ingredients.value;
    }
}
exports.default = Recipe;
//# sourceMappingURL=Recipe.js.map