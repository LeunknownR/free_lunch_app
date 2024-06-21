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
const RabbitMQManager_1 = __importDefault(require("../../../../shared/infrastructure/message_queue/RabbitMQManager"));
const RabbitMQQueue_1 = __importDefault(require("../../../../shared/infrastructure/message_queue/RabbitMQQueue"));
const IngredientSuppliedQueueData_1 = require("../../../domain/queue_data/IngredientSuppliedQueueData");
const SupplyIngredientQueueData_1 = require("../../../domain/queue_data/SupplyIngredientQueueData");
class QueueContext {
    constructor(rabbitMQManager) {
        this.rabbitMQManager = rabbitMQManager;
    }
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!QueueContext.instance)
                QueueContext.instance = yield QueueContext.NewConnection();
            return QueueContext.instance;
        });
    }
    static NewConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const rabbitMQManager = yield RabbitMQManager_1.default.connect();
            const rabbitMQContext = new QueueContext(rabbitMQManager);
            yield rabbitMQContext.startAllQueues();
            return rabbitMQContext;
        });
    }
    //#region Methods
    startAllQueues() {
        return __awaiter(this, void 0, void 0, function* () {
            this._supplyIngredientQueue = yield this.startQueue(SupplyIngredientQueueData_1.SUPPLY_INGRENDIENTS_QUEUE_NAME);
            this._ingredientSuppliedQueue = yield this.startQueue(IngredientSuppliedQueueData_1.INGREDIENTS_SUPPLIED_QUEUE_NAME);
        });
    }
    startQueue(queueName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield RabbitMQQueue_1.default.New(queueName, this.rabbitMQManager);
        });
    }
    get supplyIngredientQueue() {
        return this._supplyIngredientQueue;
    }
    get ingredientSuppliedQueue() {
        return this._ingredientSuppliedQueue;
    }
}
exports.default = QueueContext;
//# sourceMappingURL=QueueContext.js.map