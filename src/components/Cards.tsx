import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import {BsFillHeartFill} from "react-icons/bs"
import { moviesData } from '../api/AxiosApi';
import { Link, Navigate } from 'react-router-dom';
import { favoriteContext } from '../App';
import {useContext} from 'react'

export const Cards : React.FC<{datas : moviesData}>= ({datas}) => {

  const {setFavorite} = useContext(favoriteContext)

  const addToFavorite = ()=> {
    
    setFavorite((a ) => [...a, datas]) 
  
    // console.log("film ajouté");
    
  }



  return ( 
  
    
      <Card 
        sx={{ width: 320 }}
        >
        <div>
          <Typography level="title-lg">{datas.Title}</Typography>
          <Typography level="body-sm">{datas.Year}</Typography>
        
        </div>

      <Link to={`/film/${datas.imdbID}`}>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={datas.Poster}
            loading="lazy"
            alt="film"
          />
        </AspectRatio> 
      </Link> 
        <CardContent orientation="horizontal">  
          <IconButton
            aria-label="heart"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.5rem', right: '0.39rem' }}
          >
          <BsFillHeartFill 
            size={18} 
            color='pink' 
            onClick={addToFavorite}
          />
            
          </IconButton>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label={datas.Title}
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            // onClick = {routeMovie}
          >
            Encore
          </Button>
        </CardContent>
      </Card>
   
  )
}

