"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const os_1 = __importDefault(require("os"));
const index_1 = require("./routes/index");
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const app = express_1.default();
utils_1.applyMiddleware(middleware_1.default, app);
const PORT = process.env.PORT || 3333;
index_1.Routes.init(app, express_1.default.Router());
const server = http_1.default.createServer(app);
server.listen(PORT, () => console.log(`${os_1.default.hostname()} Running on port ${PORT}`));
//# sourceMappingURL=server.js.map