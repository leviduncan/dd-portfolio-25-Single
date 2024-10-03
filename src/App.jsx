import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
const url = 'https://darrin-duncan.com/wp-json/wp/v2/pages';
  return (
    <>
      <Header url={url} />
      <About url={url} />
      <Projects url={url} />
      <Skills url={url} />
      <Footer url={url} />
    </>
  );
}

export default App;
