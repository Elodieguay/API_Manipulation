import axios, { AxiosResponse } from "axios";


export interface moviesData {
    Title: string,
    Year: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Poster: string,
    Plot: string,
    imdbID:string,

}

// on crée un gestionnaire d'API qui gérer l'appel API et la réponse 

export const AxiosApi = async ({searchMovie}:{searchMovie:string}) => {
    
    try{
    const response : AxiosResponse <{ Search: moviesData[] }> = await axios.get(`https://www.omdbapi.com/?apikey=39988162&type=movie&s=${searchMovie}`)
    // console.log(response);

    return response.data.Search
        
    }        
    catch(err:any) {
       throw new err('Error fetching movies:'+ err.message)
    }
     
 
}


