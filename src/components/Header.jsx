import { useState, useEffect } from 'react';
import Navigation from "./Navigation";
import Loading from './Loading';
import Menu from './Menu';

const HeaderContent = ({ post }) => {
  return (
    <header className="header">
      <Navigation />
      <div className="container">
        <h2 className="fade-in-left">{post.acf.page_title_2}</h2>
        <h1 className="fade-in">{post.acf.page_title}</h1>
        <h3 className="fade-in">{post.acf.page_content}</h3>
        <div className="row">
        <div className="btn-grp d-none d-sm-block col-12 col-sm-6 col-md-3">
          <a href={post.acf.main_btn_url} className="cta btn btn-main d-block fade-in-top  " >
            {post.acf.main_btn_label}
          </a>
        </div>
        </div>

      </div>
      <div className="bottom-menu d-flex d-md-none justify-content-around">
        <a href="#about"><i className="bi bi-person-circle"></i></a>
        <a href="#projects"><i className="bi bi-brush"></i></a>
        <a href="#skills"><i className="bi bi-code-slash"></i></a>
        <a href="#skills"><i className="bi bi-person-lines-fill"></i></a>
      </div>
    </header>
  );
};


const Header = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`${url}/540`);
        const data = await response.json();
        setPost(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPostData();
  }, []);


  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  if (!post) return null;

  return (
    <HeaderContent post={post} />
  );
};

export default Header;