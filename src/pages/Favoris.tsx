import {useContext} from 'react'
import { favoriteContext } from '../App'
import FavoriteCard from '../components/FavoriteCard'
import { FavoriteContextType } from '../type/favoriteContext';

const Favoris = () => {

  const {favorite, setFavorite} = useContext<FavoriteContextType>(favoriteContext)

  const removeFilm = (index: number) => {
    let newCart = [...favorite]; // Clonez le tableau de favoris
    newCart.splice(index, 1);
    setFavorite(newCart); // Mettez à jour le contexte avec le nouveau tableau de favoris
  }
  
  return (
    <div>
      <h1 className='m-10 text-lg max-md:text-base  font-semibold'>MES FILMS A VOIR</h1>
      {favorite.map((fav, index) =>(
      <FavoriteCard key={fav.imdbID} removeFilm = {removeFilm} favorite = {fav} index = {index} />
      ))}
    </div>
  )
}

export default Favoris