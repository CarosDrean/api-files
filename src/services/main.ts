import moment from 'moment'
import jwt from 'jwt-simple'
import {Config} from "../config";

export class TokenService {
    static createToken(data: any): string {
        const payload = {
            sub: data,
            iat: moment().unix(),
            exp: moment().add(2, 'days').unix()
        }
        return jwt.encode(payload, Config.SECRET_TOKEN)
    }

    static decodeToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const payload = jwt.decode(token, Config.SECRET_TOKEN)

                if (payload.exp <= moment().unix()) {
                    reject({
                        status: 401,
                        message: 'El token ha expirado'
                    })
                }
                resolve(payload.sub)
            } catch (err) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                })
            }
        })
    }
}
