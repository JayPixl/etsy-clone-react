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
    let results: any
    let error: any

    try {
        results = {
            categories: await prisma.category.findMany(),
            popularListings: await prisma.popularListings.findMany(),
            otherListings: await prisma.otherListings.findMany()
        }

    } catch (e) {
        error = "Could not retrieve data"
    }

    console.log(results)
    res.json({
        results,
        error
    })
})

export default app