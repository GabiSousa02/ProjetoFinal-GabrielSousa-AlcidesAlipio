
import express from "express";
import cors from "cors";
import { getFilmes } from "./repo.js";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/filmes", (req, res) => {
    res.status(200).json(getFilmes());
});

app.delete("/api/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = deleteFilme(id);
    if (deleted) {
        res.status(200).json({ message: "Filme deletado com sucesso!" });
    } else {
        res.status(404).json({ message: "Filme não encontrado!" });
    }
});

export default app;
