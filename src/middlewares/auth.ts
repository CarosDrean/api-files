import {NextFunction, Request, Response} from "express";
import {SECRET_TOKEN} from "../config";
import {TokenService} from "../services/main";

export class Auth {
    static login(req: Request, res: Response) {
        const secret = req.body.secret;

        let token = '';
        if (secret) {
            if (secret === SECRET_TOKEN) {
                const data = 'permitido'
                token = TokenService.createToken(data);
            }
        }

        res.json({
            token,
        });
    }

    static isAuth(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.authorization) {
            return res.status(403).send({ message: 'No tienes autorización' });
        }
        const token = req.headers.authorization

        TokenService.decodeToken(token).then(res => {
            // req.user = res
            next()
        }).catch(res => {
            console.log("no paso")
            res.status(res.status)
            res.json({
                'message': 'Token no valido'
            })
        })
    }
}
