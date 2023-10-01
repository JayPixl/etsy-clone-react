import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express API!' });
});
app.all("*", (req, res) => {
    res.json({ error: "Invalid request" });
});
if (process.env.NODE_ENV !== "production") {
    app.listen(3001, () => console.log("Dev API is online 🚀"));
}
export default app;
