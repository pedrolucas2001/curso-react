import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import filmes from "./json/filmes.json"

const categories = [
  "Ação",
  "Terror",
  "Comédia",
  "Drama",
  "Documentário",
];

function filterCategory(id){
  return filmes.filter( filme => filme.category === categories[id])
};

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>

        <Category category={categories[0]}>
          { filterCategory(0).map((filme) => <Card id={filme.id} nomeFilme={filme.title} key={filme.id}/>)}
        </Category> 

        <Category category={categories[1]}>
          { filterCategory(1).map((filme) => <Card id={filme.id} nomeFilme={filme.title} key={filme.id}/>)}
        </Category> 

        <Category category={categories[2]}>
          { filterCategory(2).map((filme) => <Card id={filme.id} nomeFilme={filme.title} key={filme.id}/>)}
        </Category> 

        <Category category={categories[3]}>
          { filterCategory(3).map((filme) => <Card id={filme.id} nomeFilme={filme.title} key={filme.id}/>)}
        </Category> 

        <Category category={categories[4]}>
          { filterCategory(4).map((filme) => <Card id={filme.id} nomeFilme={filme.title} key={filme.id}/>)}
        </Category> 

        
      </Container>
      <Footer />
    </>
    
  );
}

export default App;
