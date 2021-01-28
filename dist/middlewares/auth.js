"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const config_1 = require("../config");
const main_1 = require("../services/main");
class Auth {
    static login(req, res) {
        const secret = req.body.secret;
        let token = '';
        if (secret) {
            if (secret === config_1.SECRET_TOKEN) {
                const data = 'permitido';
                token = main_1.TokenService.createToken(data);
            }
        }
        res.json({
            token,
        });
    }
    static solveToken(token) {
        return new Promise((resolve, reject) => {
            main_1.TokenService.decodeToken(token).then(res => {
                resolve(true);
            }).catch(res => {
                reject('No Autorizado');
            });
        });
    }
    static isAuth(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(403).send({ message: 'No tienes autorización' });
        }
        const token = req.headers.authorization;
        main_1.TokenService.decodeToken(token).then(res => {
            // req.user = res
            next();
        }).catch(res => {
            console.log("no paso");
            res.status(res.status);
            res.json({
                'message': 'Token no valido'
            });
        });
    }
}
exports.Auth = Auth;
