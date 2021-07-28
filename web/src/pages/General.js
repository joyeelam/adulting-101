import React, { useState, useEffect } from "react";
import General from "../components/General";



function GeneralKnowledge() {

  const [cat,setCat] = useState([])

    useEffect(() => {
        getCat();
    }, []);

    const getCat = async () => {
        const response = await fetch("https://catfact.ninja/fact")
        const data = await response.json()
        setCat(data.fact);
    }

    const [fact,setFact] = useState([])

    useEffect(() => {
        getFact();
    }, []);

    const getFact = async () => {
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()
        setFact(data.slip.advice);
    }



  return (
    <div>
      <General
        cat={cat}
        fact={fact}
      />
    </div>

   );
};

export default GeneralKnowledge;
