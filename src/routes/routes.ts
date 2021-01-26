import {Router} from 'express'
import {Auth} from "../middlewares/auth";
import midMulter from '../middlewares/multer'
import {invoiceController} from "../controllers/invoice";

function routes(): Router {
    const router: Router = Router()

    router.post('/upload-invoice/', [Auth.isAuth, midMulter], invoiceController.upload)

    return router
}

export default routes()
