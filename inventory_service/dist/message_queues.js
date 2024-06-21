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
const request_ingredients_queue_1 = __importDefault(require("./context/infrastructure/message_queue/request_ingredients.queue"));
const ingredient_supplied_queue_1 = __importDefault(require("./context/infrastructure/message_queue/ingredient_supplied.queue"));
function onMessageQueues() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_ingredients_queue_1.default)();
        yield (0, ingredient_supplied_queue_1.default)();
    });
}
exports.default = onMessageQueues;
//# sourceMappingURL=message_queues.js.map