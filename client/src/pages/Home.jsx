import { useEffect, useState } from "react"
import "@assets/home.css"

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/api/filmes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar filmes")
                }

                return response.json()
            })
            .then((data) => {
                setFilmes(data)
            })
            .catch((error) => {
                setErro(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <main className="container">
                <p className="mensagem">A carregar filmes...</p>
            </main>
        )
    }

    if (erro) {
        return (
            <main className="container">
                <p className="mensagem erro">Erro: {erro}</p>
            </main>
        )
    }

    return (
        <main className="container">
            <header className="header">
                <span className="subtitulo">CINEMA COLLECTION</span>
                <h1>Os teus filmes</h1>
                <p>Descobre a tua próxima experiência cinematográfica.</p>
            </header>

            <section className="filmes">
                {filmes.map((filme) => (
                    <article key={filme.id} className="filme">
                        <div className="filme-topo">
                            <span className="filme-ano">
                                {filme.year}
                            </span>

                            <span className="filme-rating">
                                ★ {filme.rating}
                            </span>
                        </div>

                        <div className="filme-conteudo">
                            <span className="filme-genero">
                                {filme.genre}
                            </span>

                            <h2>{filme.title}</h2>

                            <div className="filme-info">
                                <p>
                                    <span>Realizador</span>
                                    {filme.director}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <footer className="footer">
                {filmes.length} filmes na coleção
            </footer>
        </main>
    )
}

export default Home
