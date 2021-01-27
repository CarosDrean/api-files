import express, {Request, Response} from 'express'
import http from 'http'
import cors from 'cors'
import {Auth} from "./middlewares/auth"
import routes from './routes/routes'
import {PORT} from "./config"

function index(req: Request, res: Response) {
    res.json({
        message: 'Welcome api files!'
    })
}

function main() {
    const app = express()
    const server  = http.createServer(app)

    app.use(express.json())
    app.use(cors({origin: ['http://localhost:3000', 'https://holosalud.org', 'http://localhost:4200']}))

    app.get('/', index)
    app.post('/login', Auth.login)
    app.use(routes)

    server.listen(PORT, () => {
        console.log(`server online in: localhost:${PORT}`)
    })
}

main()
