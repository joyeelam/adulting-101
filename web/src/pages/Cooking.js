import React, {useState, useEffect} from "react";

// class Cooking extends Component {
//     constructor() {
//         super()
//         this.state = {
//             info: {}
//         }
//     }

//     componentDidMount() {
//         fetch("https://newsapi.org/v2/everything?language=en&q=tesla&from=2021-06-26&sortBy=publishedAt&apiKey=3b4ea85eafdf43aca4a9bb95984d7efd")
//         .then(response => response.json())
//         .then(data => { 
//             this.setState({
//                 info: data
//             })
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.info.id}
//             </div>
//         )
//     }
// }

function Cooking() {

    const [data, setData] = useState([])

    const recipes = () => {
        fetch("https://newsapi.org/v2/everything?language=en&q=tesla&from=2021-06-26&sortBy=publishedAt&apiKey=3b4ea85eafdf43aca4a9bb95984d7efd")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json)
            })
    }

    useEffect(() => {
        recipes()
    }, [])

    return (
        <div>
            <div>
                <button onClick={recipes}>recipes</button>
                {/* {JSON.stringify(data,null,2)} */}
            </div>
            <div>
                <div >
                    {data.map(data => ( 
                        <p key={data.id}>{data.title}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Cooking