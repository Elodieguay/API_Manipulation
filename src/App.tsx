import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Navbar from './components/Navbar'
import Favoris from './pages/Favoris'
import {useState, useEffect, createContext} from 'react'
import { moviesData } from './api/AxiosApi'
import { FavoriteContextType } from './type/favoriteContext'

export const favoriteContext = createContext<FavoriteContextType>({
  favorite: [],
  setFavorite: () => {},
});

function App() {

  const initialFavorite  = () : moviesData[] => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (typeof storedCartItems === 'string') {
      return JSON.parse(storedCartItems)as moviesData[];
    } else {
      return [];
       ;
    }
  };
  
  const [favorite, setFavorite] = useState<moviesData[]>(initialFavorite) 


  useEffect(() => {
    // stockage dans le local storage à chaque fois que l'on modifie le panier
    if(favorite.length > 0){
      localStorage.setItem('cartItems', JSON.stringify(favorite))
      console.log("favoris est dans la page");
    
    } else {
      localStorage.removeItem('cartItems')
      console.log(('favoris est vide'));
      
    }
  }, [favorite])


  return (
  <favoriteContext.Provider value={{favorite, setFavorite}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/film/:id' element={<Movie/>}/>
        <Route path='/favoris' element={<Favoris/>}/>
      </Routes>
    </Router>
  </favoriteContext.Provider>      
   
  )
}

export default App
