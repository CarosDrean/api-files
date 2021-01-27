import multer from 'multer'
import {v4 as uuidV4} from 'uuid'
import path from 'path'
import {PATH_INVOICES} from '../config'

const storageInvoice = multer.diskStorage({
    destination: PATH_INVOICES,
    filename: (req, file, cb) => {
        cb(null, uuidV4() + path.extname(file.originalname).toLocaleLowerCase())
    }
})

const midMulterInvoice = multer({
    storage: storageInvoice,
    dest: PATH_INVOICES
}).single('file')

export default midMulterInvoice
