import style from "./Card.module.css"

function Card({ id }){
    return(
        <section className={style.card}>
            <a 
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank" 
                rel="noreferrer noopener">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
            </a>

        </section>
    );
};

export default Card;
