"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const message_queues_1 = __importDefault(require("./message_queues"));
const app = (0, express_1.default)();
app.use(express_1.default.json({
    limit: "5mb"
}));
app.use(routers_1.default);
(0, message_queues_1.default)();
const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
//# sourceMappingURL=app.js.map