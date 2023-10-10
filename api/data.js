import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.get('/api/data', async (_, res) => {
    let error = false;
    let categories;
    let popularListings;
    let otherListings;
    // try {
    //     categories = await prisma.category.findMany()
    //     console.log("DONE!")
    // } catch (e) {
    //     error = true
    // }
    // try {
    //     popularListings = await prisma.popularListings.findMany()
    //     console.log("DONE!")
    // } catch (e) {
    //     error = true
    // }
    // try {
    //     otherListings = await prisma.otherListings.findMany()
    //     console.log("DONE!")
    // } catch (e) {
    //     error = true
    // }
    categories = await prisma.category.findMany();
    popularListings = await prisma.popularListings.findMany();
    otherListings = await prisma.otherListings.findMany();
    res.json({
        results: {
            categories,
            popularListings,
            otherListings
        },
        error
    });
});
export default app;
