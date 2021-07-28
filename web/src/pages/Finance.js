import React, { useState, useEffect } from "react";
import Latest from '../components/Financelayout'


const Finance = () => {

    const [news,setNews] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-06-27&sortBy=publishedAt&language=en&apiKey=c98d888c09674ad7ba52b7773a1e22d8")
        const data = await response.json()
        setNews(data.articles);
        console.log(data)
    }

        return (
            <div>
                {news.map(article => (
                    <Latest 
                        // title={news}
                        // image={}
                        // description={}
                    />
                ))}
            </div>
            
        );
}; 

export default Finance;