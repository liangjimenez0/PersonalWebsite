import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./index.css";

const PostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/markdown/${id}.md`);
        if (!response.ok) throw new Error("Post not found");
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="post-page">
      <article
        className="markdown aos-init aos-animate animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        {/* <div className="ending-line"></div> */}
      </article>
    </div>
  );
};

export default PostPage;
