"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceController = void 0;
const config_1 = require("../config");
const mime_1 = __importDefault(require("mime"));
const fs = __importStar(require("fs"));
const auth_1 = require("../middlewares/auth");
class InvoiceController {
    upload(req, res) {
        res.json({ 'file': req.file.filename, 'message': 'File Uploaded!' });
    }
    getInvoice(req, res) {
        const token = req.query.token;
        auth_1.Auth.solveToken(token).then(e => {
            const name = req.query.name;
            const path = config_1.PATH_INVOICES + '/' + name;
            fs.readFile(path, (err, data) => {
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
    deleteInvoice(req, res) {
        const name = req.params.name;
        const path = config_1.PATH_INVOICES + '/' + name;
        InvoiceController.deleteFile(path);
        res.json('Invoice Deleted');
    }
    static deleteFile(path) {
        fs.unlinkSync(path);
    }
}
exports.invoiceController = new InvoiceController();
