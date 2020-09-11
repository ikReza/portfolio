import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.location.href = "https://github.com/ikReza/myBlog";
  }, []);

  return <div>My blog</div>;
};

export default Blog;
