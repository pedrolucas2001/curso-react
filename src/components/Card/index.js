import { Link } from "react-router-dom";
import style from "./Card.module.css"

function Card({ id ,nomeFilme }){
    return(
        <section className={style.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
                <h4>{nomeFilme}</h4>
            </Link>
        </section>
    );
};

export default Card;
