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
const MongoDBContext_1 = __importDefault(require("./MongoDBContext"));
const { MONGODB_ORDER_DATABASE } = process.env;
class MongoDBOrderContext extends MongoDBContext_1.default {
    //#endregion
    constructor(connection) {
        super(connection);
        this.Recipe = this.getRecipeModel();
        this.Order = this.getOrderModel();
    }
    //#endregion
    //#region Methods
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield MongoDBContext_1.default.getNewConnection(MONGODB_ORDER_DATABASE);
            return new MongoDBOrderContext(connection);
        });
    }
    getRecipeModel() {
        return this.createModel("recipes", {
            _id: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            ingredients: {
                type: [{
                        id: {
                            type: String,
                            required: true
                        },
                        label: {
                            type: String,
                            required: true
                        },
                        quantity: {
                            type: Number,
                            required: true
                        }
                    }],
                required: true,
            },
        });
    }
    getOrderModel() {
        return this.createModel("orders", {
            _id: {
                type: String,
                required: true
            },
            recipe: {
                type: Number,
                ref: "recipes",
                required: true,
            },
            issuedOn: {
                type: Date,
                required: true
            },
            status: {
                type: String,
                required: true
            },
        });
    }
}
exports.default = MongoDBOrderContext;
//# sourceMappingURL=MongoDBOrderContext.js.map