import express from 'express'
import cors from 'cors'
import { prisma } from './utils/_prisma.js'

let app: express.Express
if (process.env.NODE_ENV === "production") {
    app = express()
} else {
    app = express.Router() as express.Express
}

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get('/api/data', async (_: any, res: any) => {
    try {
        const results = {
            categories: await prisma.category.findMany(),
            popularListings: await prisma.popularListings.findMany(),
            otherListings: await prisma.otherListings.findMany()
        }
        res.json({
            results
        })
    } catch (e) {
        res.json({
            error: "Could not retrieve data"
        })
    }
})

export default app