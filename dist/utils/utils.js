"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const json = require('../../configuration.json');
class Utils {
    static getConfiguration() {
        const config = json;
        return config;
    }
}
exports.Utils = Utils;
