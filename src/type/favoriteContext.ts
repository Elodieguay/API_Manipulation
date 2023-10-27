import { moviesData } from '../api/AxiosApi';

export type FavoriteContextType = {
  favorite: moviesData[];
  setFavorite: (favorites: moviesData[]) => void;
};

