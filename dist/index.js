"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./middlewares/auth");
const routes_1 = __importDefault(require("./routes/routes"));
const config_1 = require("./config");
function index(req, res) {
    res.json({
        message: 'Welcome api files!'
    });
}
function main() {
    const app = express_1.default();
    const server = http_1.default.createServer(app);
    app.use(express_1.default.json());
    app.use(cors_1.default({ origin: ['http://localhost:3000', 'https://holosalud.org', 'http://localhost:4200'] }));
    app.get('/', index);
    app.post('/login', auth_1.Auth.login);
    app.use(routes_1.default);
    server.listen(config_1.PORT, () => {
        console.log(`server online in: localhost:${config_1.PORT}`);
    });
}
main();
