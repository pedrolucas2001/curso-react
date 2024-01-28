import style from "./Watch.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

function Watch(){
    return(
        <>
            <Header/>
            <Container>
                <section className={style.watch}>
                    <h1>Assistir</h1>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/mW8o_WDL91o?si=QrNIr7LN5jUeimrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;
