"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = require("express");
const MySqlContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MySqlContextProvider"));
const MySqlUserRepository_1 = __importDefault(require("../persistence/MySqlUserRepository"));
const LoginUseCase_1 = __importDefault(require("../../application/LoginUseCase"));
const BcryptEncrypter_1 = __importDefault(require("../../../shared/infrastructure/BcryptEncrypter"));
const JWTTokenizer_1 = __importDefault(require("../../../shared/infrastructure/JWTTokenizer"));
const LoginError_1 = __importDefault(require("../../domain/LoginError"));
const ResponseLoginDTO_1 = __importStar(require("./ResponseLoginDTO"));
const UserUsername_1 = __importDefault(require("../../domain/UserUsername"));
const UserPassword_1 = __importDefault(require("../../domain/UserPassword"));
const withErrorHandler_1 = __importDefault(require("../../../shared/infrastructure/api/withErrorHandler"));
const router = (0, express_1.Router)();
router.post("/", (0, withErrorHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUseCase = new LoginUseCase_1.default(new MySqlUserRepository_1.default(MySqlContextProvider_1.default.getUserDatabase()), new BcryptEncrypter_1.default(), new JWTTokenizer_1.default());
        const [user, token] = yield loginUseCase.invoke(new UserUsername_1.default(req.body.username), new UserPassword_1.default(req.body.password));
        res.json({
            message: "SUCCESS",
            data: new ResponseLoginDTO_1.default(token, new ResponseLoginDTO_1.UserDTO(user)),
        });
    }
    catch (error) {
        if (error instanceof LoginError_1.default) {
            res.status(400).json({
                message: error.message,
                data: null,
            });
            return;
        }
        res.status(500).json({
            message: process.env.NODE_ENV === "development" ? error : "UNEXPECTED_ERROR",
            data: null,
        });
    }
})));
const serviceRouter = {
    path: "/login",
    router,
};
exports.default = serviceRouter;
//# sourceMappingURL=login.router.js.map