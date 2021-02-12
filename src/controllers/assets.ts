import {Request, Response} from "express";
import {Auth} from "../middlewares/auth";
import {PATH_ASSETS} from "../config";
import fs from "fs";
import mime from "mime";

class AssetsController {
    getAsset(req: Request, res: Response) {
        const token = req.query.token
        Auth.solveToken(token as string).then(e => {
            const name = req.query.name
            const path = PATH_ASSETS + '/' + name
            fs.readFile(path, (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                const mimeType = mime.lookup(path);
                const headers = {
                    'content-type': mimeType
                };
                res.writeHead(200, headers)
                res.end(data)
            })
        }).catch(err => {
            res.send(err)
        })
    }

}

export const assetsController = new AssetsController()
