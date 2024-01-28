import style from "./Card.module.css"

function Card({ id ,nomeFilme }){
    return(
        <section className={style.card}>
            <a 
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank" 
                rel="noreferrer noopener">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
                <h4>{nomeFilme}</h4>
            </a>

        </section>
    );
};

export default Card;
