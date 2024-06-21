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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET_KEY } = process.env;
class JWTTokenizer {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                jsonwebtoken_1.default.sign(payload, JWT_SECRET_KEY, (err, token) => {
                    if (err)
                        rej(err);
                    else
                        res(token);
                });
            });
        });
    }
    check(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                jsonwebtoken_1.default.verify(token, JWT_SECRET_KEY, err => {
                    if (err)
                        rej(false);
                    else
                        res(true);
                });
            });
        });
    }
}
exports.default = JWTTokenizer;
//# sourceMappingURL=JWTTokenizer.js.map