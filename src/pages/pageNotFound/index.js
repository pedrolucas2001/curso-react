import style from "./PageNotFound.module.css"
import imgErro404 from "./erro404.png"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function PageNotFound(){
    return(
        <>
            <Header/>
            <section className={style.container}>
            <h2>Ops! Página não encontrada!</h2>
            <img src={imgErro404} alt="Logo de página não encontrada">
            </img>
            </section>
            <Footer/>
        </>       
    );
};

export default PageNotFound;
