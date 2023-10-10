import express from 'express';
import cors from 'cors';
import { prisma } from './utils/_prisma.js';
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.get('/api', (_, res) => {
    res.json({ message: 'Hello from Express API!' });
});
app.get('/api/data', async (_, res) => {
    try {
        const results = {
            categories: await prisma.category.findMany(),
            popularListings: await prisma.popularListings.findMany(),
            otherListings: await prisma.otherListings.findMany()
        };
        res.json({
            results
        });
    }
    catch (e) {
        res.json({
            error: "Could not retrieve data"
        });
    }
});
// app.get("/api/setmessages", async (_, res) => {
//     try {
//         await prisma.category.deleteMany()
//         await prisma.popularListings.deleteMany()
//         await prisma.otherListings.deleteMany()
//         await prisma.category.createMany({
//             data: [
//                 {
//                     imageUrl: "https://i.etsystatic.com/6841042/c/1024/1024/0/0/il/e7597d/3912828889/il_300x300.3912828889_7al8.jpg",
//                     label: "Mother's Day Gifts"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/19750099/c/672/672/0/0/il/073cf2/4163911823/il_300x300.4163911823_3qu6.jpg",
//                     label: "Personalized Jewelry"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/6734380/r/il/4ddd33/3165103255/il_300x300.3165103255_onhs.jpg",
//                     label: "Home Decor & Gifts"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/6515718/r/il/12c2bd/3990269772/il_300x300.3990269772_ikyr.jpg",
//                     label: "Outdoor Decor"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/6739878/c/2850/2850/75/0/il/dc83c9/4711488168/il_300x300.4711488168_4kh4.jpg",
//                     label: "Wedding Decor & Gifts"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/13869225/c/1850/1850/434/173/il/25a89d/4236152087/il_300x300.4236152087_1llm.jpg",
//                     label: "Gifts on Sale"
//                 }
//             ]
//         })
//         await prisma.popularListings.createMany({
//             data: [
//                 {
//                     imageUrl: "https://i.etsystatic.com/34269816/r/il/f9cc97/4040914287/il_340x270.4040914287_lzjb.jpg",
//                     label: "Personalized Cutting Board Wedding Gift, Customize you...",
//                     stars: "★★★★★",
//                     reviews: "2,842",
//                     price: "36.95",
//                     oldPrice: "61.59",
//                     freeShipping: true
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/23702777/r/il/14c918/4184624086/il_340x270.4184624086_s698.jpg",
//                     label: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift...",
//                     stars: "★★★★★",
//                     reviews: "15,992",
//                     price: "9.95",
//                     oldPrice: "19.90",
//                     freeShipping: true
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/14647199/r/il/07ef6a/3336462729/il_794xN.3336462729_dzs1.jpg",
//                     label: "Personalized Name Necklace, Gift for Her, Peronsalized Gift...",
//                     stars: "★★★★★",
//                     reviews: "7,415",
//                     price: "48.00",
//                     oldPrice: "120.00",
//                     freeShipping: true
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/24303637/c/775/616/0/149/il/ff8d9d/4476404866/il_340x270.4476404866_lhf4.jpg",
//                     label: "Personalized Hand Embroidered Corner Bookma...",
//                     stars: "★★★★★",
//                     reviews: "1,282",
//                     price: "12.99",
//                     freeShipping: true
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/21882344/c/2380/1892/284/590/il/f06f50/4620121616/il_340x270.4620121616_mw4s.jpg",
//                     label: "Married Ornament, Wedding Gift, Wedding Date ornamen...",
//                     stars: "★★★★★",
//                     reviews: "11,500",
//                     price: "14.95"
//                 }
//             ]
//         })
//         await prisma.otherListings.createMany({
//             data: [
//                 {
//                     imageUrl: "https://i.etsystatic.com/6588137/r/il/737903/3021989716/il_680x540.3021989716_bvw3.jpg",
//                     price: "25.00"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/5768875/c/1754/1394/277/89/il/af2a26/4040555653/il_680x540.4040555653_45ky.jpg",
//                     price: "18.00"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/15605620/r/il/d25b7c/4029212960/il_680x540.4029212960_2oxd.jpg",
//                     price: "8.28"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/6748817/r/il/acc7e2/2933109654/il_680x540.2933109654_nsxp.jpg",
//                     price: "15.00"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/9374302/r/il/b688a5/3266279171/il_680x540.3266279171_2odf.jpg",
//                     price: "290.00"
//                 },
//                 {
//                     imageUrl: "https://i.etsystatic.com/12201809/c/1280/1017/0/246/il/b66994/4579112734/il_680x540.4579112734_qnmx.jpg",
//                     price: "21.97"
//                 },
//             ]
//         })
//         res.json({ success: "true" })
//     } catch (e) {
//         res.json({ error: "Could not complete action" })
//     }
// })
app.all("/api/*", (_, res) => {
    res.json({ error: "Invalid request" });
});
if (process.env.NODE_ENV !== "production") {
    app.listen(3001, () => console.log("Dev API is online 🚀"));
}
export default app;
