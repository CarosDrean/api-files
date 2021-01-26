import multer from 'multer'
import {v4 as uuidV4} from 'uuid'
import path from 'path'

const storageInvoice = multer.diskStorage({
    destination: 'bucket/invoice',
    filename: (req, file, cb) => {
        cb(null, uuidV4() + path.extname(file.originalname).toLocaleLowerCase())
    }
})

const midMulterInvoice = multer({
    storage: storageInvoice,
    dest: 'bucket/invoice'
}).single('file')

export default midMulterInvoice
