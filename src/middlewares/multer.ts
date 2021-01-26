import multer from 'multer'

const storage = multer.diskStorage({
    destination: 'temp',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const midMulter = multer({
    storage: storage,
    dest: 'temp'
}).single('file')

export default midMulter
