import './App.css';
import Header from './components/Header';
import About from './components/About';

function App() {
const url = 'https://darrin-duncan.com/wp-json/wp/v2/pages';
  return (
    <>
      <Header url={url} />
      <About url={url} />
    </>
  );
}

export default App;
