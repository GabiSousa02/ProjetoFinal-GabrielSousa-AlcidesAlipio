import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, "..", "filmes.json")

export function getMovies() {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"))
}

export function addMovie(movie) {
    const filmes = getMovies()

    if (filmes.some(film => film.title === movie.title))
        return undefined

    filmes.push(movie)

    fs.writeFileSync(filePath, JSON.stringify(filmes, null, 4))

    return movie
}