import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/header.css'
import './css/main.css'
import './css/gallery.css'
import './css/contact.css'
import './css/cards.css'
import './css/footer.css'


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Gallery />
      <Contact />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
