import { moviesData } from "./AxiosApi"


export const FetchById = async(id:string) => {
    
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=39988162&i=${id}`)
        // console.log(response);
        
        if (response.status !== 200) {
          throw new Error(`Failed to fetch movie details: ${response.status}`);
        }

        const jsonData = await response.json();
        // console.log(jsonData);
        
        if (!jsonData) {
          throw new Error("Movie details not found");

        }
        return jsonData
      } catch (error) {
        // console.error("Error fetching movie details:", error);
        return null
      }

}

