const API_KEY="iMfOkvdxv0a9RXiUVTgEHq8Uq6B2";

//GET THE UPCOMING MATHCHES

export const getMatches = () =>{
    const url=` https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR ",error));
}



// Load match detials

export const getMatchDetails=(id)=>{
    const url=` https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then(response=>response.json())
    .catch(error=>console.log(error));
};
