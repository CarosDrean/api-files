import {Router} from 'express'
import {Auth} from "../middlewares/auth";
import midMulter from '../middlewares/multer'
import {sendFileController} from "../controllers/sendfile";
import {uploadFileController} from "../controllers/upload";

function routes(): Router {
    const router: Router = Router()

    router.post('/upload-file/', [Auth.isAuth, midMulter], uploadFileController.upload)
    router.post('/send-file/', Auth.isAuth, sendFileController.sendMail)

    return router
}

export default routes()
