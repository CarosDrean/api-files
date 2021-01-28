"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const moment_1 = __importDefault(require("moment"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const config_1 = require("../config");
class TokenService {
    static createToken(data) {
        const payload = {
            sub: data,
            iat: moment_1.default().unix(),
            exp: moment_1.default().add(2, 'days').unix()
        };
        return jwt_simple_1.default.encode(payload, config_1.SECRET_TOKEN);
    }
    static decodeToken(token) {
        return new Promise((resolve, reject) => {
            try {
                const payload = jwt_simple_1.default.decode(token, config_1.SECRET_TOKEN);
                if (payload.exp <= moment_1.default().unix()) {
                    reject({
                        status: 401,
                        message: 'El token ha expirado'
                    });
                }
                resolve(payload.sub);
            }
            catch (err) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                });
            }
        });
    }
}
exports.TokenService = TokenService;
