
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "..", "filmes.json");

let filmes = JSON.parse(fs.readFileSync(filePath, "utf-8"));


export function getFilmes() {
    return filmes;
}


export function save() {
    fs.writeFileSync(filePath, JSON.stringify(filmes, null, 4));
}
