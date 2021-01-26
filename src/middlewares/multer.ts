import multer from 'multer'

const storageInvoice = multer.diskStorage({
    destination: 'bucket/invoice',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const midMulterInvoice = multer({
    storage: storageInvoice,
    dest: 'bucket/invoice'
}).single('file')

export default midMulterInvoice
