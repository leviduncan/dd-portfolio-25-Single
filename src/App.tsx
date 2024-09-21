import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://darrin-duncan.com/wp-json/wp/v2/pages/540')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <>
    {loading ? (<p>Loading...</p>) : ( <Header post={posts}/>)}
     
    </>
  )
}

export default App
