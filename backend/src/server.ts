import express, { Router } from "express";
import cors from "cors";

const app = express();
const router = Router();

// Permitir qualquer origem (localhost:3000,4000,5000....)
app.use(cors());

// Rotas
router.get('/test', (req, res) => {
    res.json({ name: "GTI" });
});

app.use('/', router);

app.listen(3000, () => console.log('Server running on port 3000'));

// npm install express
// npm install --save-dev @types/express ts-node typescript4
// npm install cors
// npm install --save-dev @types/cors
