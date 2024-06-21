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
const amqplib_1 = __importDefault(require("amqplib"));
const { RABBITMQ_PORT, RABBITMQ_HOSTNAME, RABBITMQ_VHOST, RABBITMQ_USER, RABBITMQ_PASSWORD } = process.env;
class RabbitMQManager {
    constructor(channel) {
        this.channel = channel;
    }
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield amqplib_1.default.connect({
                protocol: "amqp",
                hostname: RABBITMQ_HOSTNAME,
                port: parseInt(RABBITMQ_PORT),
                username: RABBITMQ_USER,
                password: RABBITMQ_PASSWORD,
                vhost: RABBITMQ_VHOST
            });
            const channel = yield connection.createChannel();
            return new RabbitMQManager(channel);
        });
    }
}
exports.default = RabbitMQManager;
//# sourceMappingURL=RabbitMQManager.js.map