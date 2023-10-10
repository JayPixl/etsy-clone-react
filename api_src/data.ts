import express from 'express'
import cors from 'cors'
import { prisma } from './utils/_prisma.js'
const router = express.Router()

router.use(express.json())
router.use(cors({
    origin: "*"
}))

router.get('/api/data', async (_, res) => {
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

export default router