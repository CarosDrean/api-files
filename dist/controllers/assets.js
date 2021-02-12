"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsController = void 0;
const auth_1 = require("../middlewares/auth");
const config_1 = require("../config");
const fs_1 = __importDefault(require("fs"));
const mime_1 = __importDefault(require("mime"));
class AssetsController {
    getAsset(req, res) {
        const token = req.query.token;
        auth_1.Auth.solveToken(token).then(e => {
            const name = req.query.name;
            const path = config_1.PATH_ASSETS + '/' + name;
            fs_1.default.readFile(path, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                const mimeType = mime_1.default.lookup(path);
                const headers = {
                    'content-type': mimeType
                };
                res.writeHead(200, headers);
                res.end(data);
            });
        }).catch(err => {
            res.send(err);
        });
    }
}
exports.assetsController = new AssetsController();
