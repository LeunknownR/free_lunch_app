"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IngredientDTO {
    //#endregion
    constructor(ingredient) {
        this.id = ingredient.id;
        this.label = ingredient.label;
        this.image = ingredient.image;
        this.stock = ingredient.stock.value;
    }
}
exports.default = IngredientDTO;
//# sourceMappingURL=IngredientDTO.js.map