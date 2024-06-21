"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderId_1 = __importDefault(require("../../domain/orders/OrderId"));
const OrderIssuedOn_1 = __importDefault(require("../../domain/orders/OrderIssuedOn"));
const OrderSaved_1 = __importDefault(require("../../domain/orders/OrderSaved"));
const OrderStatus_1 = __importDefault(require("../../domain/orders/OrderStatus"));
const RecipeOrderSaved_1 = __importDefault(require("../../domain/orders/RecipeOrderSaved"));
const RecipeId_1 = __importDefault(require("../../domain/recipes/RecipeId"));
const RecipeImage_1 = __importDefault(require("../../domain/recipes/RecipeImage"));
const RecipeName_1 = __importDefault(require("../../domain/recipes/RecipeName"));
class MongoDBOrderRepository {
    constructor(orderDatabase) {
        this.orderDatabase = orderDatabase;
    }
    //#region Methods
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderDatabase.Order.find({})
                .sort({ issuedOn: "desc" })
                .populate({
                path: "recipe",
                select: "_id name image",
            })
                .exec();
            return orders.map(orderDocument => this.toOrderSaved(orderDocument));
        });
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = new this.orderDatabase.Order({
                _id: order.id,
                recipe: order.recipeId,
                issuedOn: order.issuedOn.toISOString(),
                status: order.status,
            });
            yield newOrder.save();
        });
    }
    toOrderSaved(orderDocument) {
        return new OrderSaved_1.default(new OrderId_1.default(orderDocument._id), new RecipeOrderSaved_1.default(new RecipeId_1.default(orderDocument.recipe._id), new RecipeName_1.default(orderDocument.recipe.name), new RecipeImage_1.default(orderDocument.recipe.image)), new OrderIssuedOn_1.default(orderDocument.issuedOn), new OrderStatus_1.default(orderDocument.status));
    }
    findOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderDocument = yield this.orderDatabase.Order.findById(orderId.value)
                .populate({
                path: "recipe",
                select: "_id name image",
            })
                .exec();
            return this.toOrderSaved(orderDocument);
        });
    }
    updateOrderStatus(order) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderDatabase.Order.updateOne({ _id: order.id }, { status: order.status });
        });
    }
}
exports.default = MongoDBOrderRepository;
//# sourceMappingURL=MongoDBOrderRepository.js.map