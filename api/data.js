import express from 'express';
import cors from 'cors';
import { prisma } from './utils/_prisma.js';
let app;
if (process.env.NODE_ENV === "production") {
    app = express();
}
else {
    app = express.Router();
}
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.get('/api/data', async (_, res) => {
    let error = false;
    let categories;
    let popularListings;
    let otherListings;
    try {
        categories = await prisma.category.findMany();
        console.log("DONE!");
    }
    catch (e) {
        error = true;
    }
    try {
        popularListings = await prisma.popularListings.findMany();
        console.log("DONE!");
    }
    catch (e) {
        error = true;
    }
    try {
        otherListings = await prisma.otherListings.findMany();
        console.log("DONE!");
    }
    catch (e) {
        error = true;
    }
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
