"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotifyIngredientSuppliedUseCase {
    constructor(ingredientSuppliedQueue) {
        this.ingredientSuppliedQueue = ingredientSuppliedQueue;
    }
    //#region Methods
    invoke(orderId, leftOverIngredients) {
        this.ingredientSuppliedQueue.send({
            orderId: orderId.value,
            leftOverIngredients: leftOverIngredients.map(ingredient => ({
                id: ingredient.id,
                quantity: ingredient.quantity.value,
            })),
        });
    }
}
exports.default = NotifyIngredientSuppliedUseCase;
//# sourceMappingURL=NotifyIngredientSuppliedUseCase.js.map