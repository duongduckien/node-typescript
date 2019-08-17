"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        router[method](path, handler);
    }
};
exports.env = env_1.default;
//# sourceMappingURL=index.js.map