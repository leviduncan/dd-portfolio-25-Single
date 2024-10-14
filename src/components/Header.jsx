import { useState, useEffect } from 'react';
import Loading from './Loading';

const HeaderContent = ({ post }) => {
  return (
    <header className="header">
      <div className="container">
        <h2 className="fade-in-left mb-3">{post.acf.page_title_2}</h2>
        <h1 className="fade-in mb-4">{post.acf.page_title}</h1>
        <p className="fade-in mb-4">{post.acf.page_content}</p>
        <div className="row">
          <div className="btn-grp d-none d-md-block col-12 col-sm-6 col-md-3">
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
        <a href="#contact"><i className="bi bi-person-lines-fill"></i></a>
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