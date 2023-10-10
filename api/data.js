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
    let results;
    let error;
    try {
        results = {
            categories: await prisma.category.findMany(),
            popularListings: await prisma.popularListings.findMany(),
            otherListings: await prisma.otherListings.findMany()
        };
    }
    catch (e) {
        error = "Could not retrieve data";
    }
    console.log(results);
    res.json({
        results,
        error
    });
});
export default app;
