"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
const storageInvoice = multer_1.default.diskStorage({
    destination: config_1.PATH_INVOICES,
    filename: (req, file, cb) => {
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname).toLocaleLowerCase());
    }
});
const midMulterInvoice = multer_1.default({
    storage: storageInvoice,
    dest: config_1.PATH_INVOICES
}).single('file');
exports.default = midMulterInvoice;
