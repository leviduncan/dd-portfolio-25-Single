import Navigation from "./Navigation";
import { Post } from "../types";
  
  interface HeaderProps {
    post: Post | null;
  }
  
  const Header = ({ post }: HeaderProps) => {
  // Ensure post data exists before rendering
  if (!post) return null;

  return (
    <header className="header">
      <Navigation />
      <div className="container">
        <h2>{post?.acf?.page_title_2}</h2>
        <h1>{post?.acf?.page_title}</h1>
        {/* 
          Uncomment the below line if needed
          <h1>WEB DEVELOPMENT & CONSULTING</h1> 
        */}
        <h3 className="">{post?.acf?.page_content}</h3>
        <div className="btn-grp col-12 col-sm-6 col-md-3">
          <a
            href={post?.acf?.main_btn_url}
            className="cta btn btn-main d-block"
          >
            {post?.acf?.main_btn_label}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;