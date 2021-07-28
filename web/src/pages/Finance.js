import { useState, useEffect } from "react";
import Financelayout from "../components/Financelayout";


const Finance = () => {

    const [news,setNews] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-06-28&sortBy=publishedAt&language=en&apiKey=e713e8203fe04b1abee10939224f2180")
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
