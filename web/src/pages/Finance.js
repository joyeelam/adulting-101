import { useState, useEffect } from "react";
import Financelayout from "../components/Financelayout";


const Finance = () => {

    const [news,setNews] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-06-28&sortBy=publishedAt&language=en&apiKey=c98d888c09674ad7ba52b7773a1e22d8")
        const data = await response.json()
        setNews(data.articles);
        console.log(data);
    }

        return (
            <div>
                {news.map(articles =>(
                    <Financelayout
                        title={articles.title}
                        content={articles.description}
                        image={articles.urlToImage}
                        author={articles.author}
                        url={articles.url}
                    />
                ))}
            </div>

        );
};

export default Finance;
