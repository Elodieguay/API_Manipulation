import { useParams } from "react-router-dom";
import { moviesData } from "../api/AxiosApi";
import {useState, useEffect} from "react"
import { FetchById } from "../api/FetchById";

const Movie = () => {
  const {id}  = useParams(); 
  console.log({id});
  
  const [movie, setMovie] = useState<moviesData | null>(null);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if(id){
    const movieDetail =  async(id:string) => {
      try {
        const data = await FetchById(id );
        console.log(data);
        
        setMovie(data)
        setError(null)
        } catch (err:any) {
          setError('Error fetching movies:'+ err.message);
        }
    }; 
    movieDetail(id)
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mt-10 align-middle px-10" >
      <div className="flex items-center ">
        <img 
              src={movie.Poster}
              width="50%"
        ></img>
        <div className=" space-y-10 mx-8">
          <h1 className=" font-bold text-4xl ">{movie.Title}</h1>
          <h2 className=" font-semibold text-lg">Réalisation en {movie.Year} </h2>
          <p className=" font-semibold">Réalisateur: <span className=" font-normal">{movie.Director}</span>, scénaristes: <span className=" font-normal">{movie.Writer}</span> </p>
          <p className=" font-semibold">Acteurs: <span className=" font-normal">{movie.Actors}</span></p>
          <p className=" font-semibold">Genre: <span className=" font-normal">{movie.Genre}</span>, durée: <span className=" font-normal">{movie.Runtime}</span> </p>
          <p className=" font-semibold">Synopsis : <span className=" font-normal">{movie.Plot}</span></p>
        </div>
      </div>    
    </div>
  )
}

export default Movie