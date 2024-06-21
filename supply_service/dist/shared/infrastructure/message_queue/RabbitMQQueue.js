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
Object.defineProperty(exports, "__esModule", { value: true });
class RabbitMQQueue {
    constructor(queue, channel) {
        this.queue = queue;
        this.channel = channel;
    }
    static New(queue, manager) {
        return __awaiter(this, void 0, void 0, function* () {
            const { channel } = manager;
            yield channel.assertQueue(queue);
            return new RabbitMQQueue(queue, channel);
        });
    }
    on(consumer) {
        this.channel.consume(this.queue, (data) => __awaiter(this, void 0, void 0, function* () {
            const payload = JSON.parse(data.content.toString());
            yield consumer(payload);
            this.channel.ack(data);
        }));
    }
    send(data) {
        this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(data)));
    }
}
exports.default = RabbitMQQueue;
//# sourceMappingURL=RabbitMQQueue.js.map