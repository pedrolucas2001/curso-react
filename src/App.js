import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="nada" />
      <Container>
        <h1>Hello World</h1>
        <p>bla bla bla bla</p>
      </Container>
      <Footer />
    </>
    
  );
}

export default App;
