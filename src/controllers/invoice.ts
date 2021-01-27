import {Request, Response} from "express";
import {PATH_INVOICES} from '../config'
import mime from 'mime'
import * as fs from "fs";

class InvoiceController {
    upload(req: Request, res: Response) {
        res.json({'file': req.file.filename, 'message': 'File Uploaded!'})
    }

    getInvoice(req: Request, res: Response) {
        const name = req.params.name
        const path = PATH_INVOICES + '/' + name
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
            res.writeHead(200, headers);
            res.end(data);
        })
    }

    deleteInvoice(req: Request, res: Response) {
        const name = req.params.name
        const path = PATH_INVOICES + '/' + name
        InvoiceController.deleteFile(path)
        res.json('Invoice Deleted')
    }

    static deleteFile(path: string) {
        fs.unlinkSync(path)
    }
}

export const invoiceController = new InvoiceController()
