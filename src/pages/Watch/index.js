import style from "./Watch.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import PageNotFound from "../pageNotFound"
import { useParams } from "react-router-dom"
import filmes from "../../json/filmes.json"

function Watch(){
    const params = useParams();
    const filme = filmes.find((filme)=> {return filme.id === params.id})
    if(!filme) { return <PageNotFound/>}

    return(
        <>
            <Header/>
            <Container>
                <section className={style.watch}>
                    <h1>Assistir</h1>
                    <iframe 
                        width="854" height="480"
                        src={`https://www.youtube.com/embed/${filme.id}`}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </section> 
            </Container>
            <Footer />
        </>
    );
}

export default Watch;
