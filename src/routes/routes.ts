import {Router} from 'express'
import {Auth} from "../middlewares/auth";
import midMulter from '../middlewares/multer'
import {invoiceController} from "../controllers/invoice";
import {assetsController} from "../controllers/assets";

function routes(): Router {
    const router: Router = Router()

    router.post('/invoice/', [Auth.isAuth, midMulter], invoiceController.upload)
    router.get('/invoice/', invoiceController.getInvoice)
    router.get('/assets/', assetsController.getAsset)
    router.delete('/invoice/:name', Auth.isAuth, invoiceController.deleteInvoice)

    return router
}

export default routes()
