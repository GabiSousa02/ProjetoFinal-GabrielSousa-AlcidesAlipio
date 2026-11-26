
import express from "express";
import cors from "cors";
import { getFilmes } from "./repo.js";

const app = express();

app.use(cors());
app.use(express.json());

// GET - Listar filmes
app.get("/api/filmes", (req, res) => {
    res.status(200).json(getFilmes());
});

export default app;
