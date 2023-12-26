import React, { useEffect, useState } from "react";
import "./Blog.css";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { FaCalendarDays } from "react-icons/fa6";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .post("http://socarm/api.php?action=get_blogs")
      .then((res) => {
        setBlogs([...res.data.blogs]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="all-blog">
      <div className="downstream-blog">
        <div className="text-info-blog">
          <h3>Наш новостной уголок</h3>
          <p>
            Здесь вы найдете самые свежие и интересные новости из разных
            областей жизни. Наша команда тщательно отбирает и анализирует
            новости, чтобы предоставить вам актуальную информацию и интересные
            материалы.
          </p>
        </div>
        <div className="main-news">
          {blogs.map((el) => {
            return (
              <div className="news-item" key={el[0]}>
                <div className="down-main-news">
                  <h4>{el[3]}</h4>
                  <p>{el[1]}</p>
                </div>
                <div className="down-info-news">
                  <p>
                    <FaEye className="feye" />
                    {Math.floor(Math.random() * 1000)}
                  </p>
                  <p>
                    {el[2]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
