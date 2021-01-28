"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const multer_1 = __importDefault(require("../middlewares/multer"));
const invoice_1 = require("../controllers/invoice");
function routes() {
    const router = express_1.Router();
    router.post('/invoice/', [auth_1.Auth.isAuth, multer_1.default], invoice_1.invoiceController.upload);
    router.get('/invoice/', invoice_1.invoiceController.getInvoice);
    router.delete('/invoice/:params', auth_1.Auth.isAuth, invoice_1.invoiceController.deleteInvoice);
    return router;
}
exports.default = routes();
