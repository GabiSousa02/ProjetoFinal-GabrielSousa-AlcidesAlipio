
import express from "express";
import cors from "cors";
import { getMovies } from "./repo.js";

import moviesRouter from "./movies.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/filmes", moviesRouter)

export default app;
