import React, { useEffect, useState } from "react";
import "./News.css"
import Flip from "./Flip";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/everything?q=farmers&from=2024-04-10&sortBy=publishedAt&apiKey=737a8676b9854908835841ad5df31787"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
<Flip/>
<div class="made2">

</div>
          <div id="box56card1">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="temp"  style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              
              <div class="box57new"><img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="box57imgnew" alt="..." />
              
              </div><div class="card-body">
                <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                <p class="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btnpr">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;


