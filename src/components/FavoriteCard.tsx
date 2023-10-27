import { moviesData } from "../api/AxiosApi"
import { FaTrashAlt } from 'react-icons/fa'


const FavoriteCard = ({removeFilm, favorite, index} : { removeFilm: (index: number) => void; favorite: moviesData ; index: number }) => {

    return (
        
            <div key={favorite.imdbID} className="mt-8 border-t border-gray-400 pt-8 mx-20">
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <img
                        src={favorite.Poster}
                        className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                        <h3 className="text-xl max-md:text-base  ">{favorite.Title}</h3>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2 font-medium text-base">
                            <button 
                            className="  transition hover:text-red-600"
                            onClick={() => removeFilm(index)}
                            >
                            <span ><FaTrashAlt size={30}/></span>
                           
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        
    
  )
}

export default FavoriteCard