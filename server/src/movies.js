import { Router } from 'express'
import { getMovies, addMovie } from './repo.js';

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json(getMovies());
});

router.post("/", (req, res) => {
    const { title, year, director, genre, rating } = req.body

    if (getMovies().some(movie => movie.title === title)) {
        return res.status(409).send({
            status: 409,
            error: "already_exists",
            message: "This movie title already exists",
        })
    }

    const movie = addMovie({
        title,
        year,
        director,
        genre,
        rating
    })

    if (!movie) {
        return res.status(500).send({
            status: 500,
            error: "internal_server_error",
            message: "Failed to create movie"
        })
    }

    return res.status(201).json(movie)
})

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = deleteFilme(id);

    if (deleted)
        res.status(200).json({
            status: 200,
            message: "Filme deletado com sucesso!"
        });

    return res.status(404).json({
        status: 200,
        error: "not_find",
        message: "Filme não encontrado!"
    });
});


export default router