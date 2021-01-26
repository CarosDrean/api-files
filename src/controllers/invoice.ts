import {Request, Response} from "express";

class InvoiceController {
    upload(req: Request, res: Response) {
        res.json('file upload!')
    }
}

export const invoiceController = new InvoiceController()
