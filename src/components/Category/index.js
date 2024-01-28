import style from "./Category.module.css"

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
