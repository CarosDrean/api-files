import {Request, Response} from "express";

class InvoiceController {
    upload(req: Request, res: Response) {
        res.json({'file': req.file.filename, 'message': 'File Uploaded!'})
    }
}

export const invoiceController = new InvoiceController()
