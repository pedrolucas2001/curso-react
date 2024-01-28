import style from "./Category.module.css"
import filmes from "../../json/filmes.json"

export const categories = [
    "Ação",
    "Terror",
    "Comédia",
    "Drama",
    "Documentário",
  ];
  
export function filterCategory(id){
    return filmes.filter( filme => filme.category === categories[id])
  };

function Category( {category , children}){
    return(
        <section className={style.category}>
            <h1>{category}</h1>
            <div >
                {children}
            </div>
        </section>
        
    );
};

export default Category;
