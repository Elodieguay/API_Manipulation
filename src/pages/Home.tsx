import {useEffect, useState} from "react"
import { AxiosApi, moviesData } from "../api/AxiosApi"
import { Cards } from "../components/Cards"
import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import {useNavigate, useLocation} from "react-router-dom"



const Home = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const searchParam = new URLSearchParams(location.search).get("search")

  const [movie, setMovie] = useState<moviesData[]| null>(null)
  const [error, setError] = useState<string | null>(null)

  const apiSearch =  async(value: string) => {
    try {
      const data = await AxiosApi({searchMovie : value});
      setMovie(data)
      setError(null)
      navigate(`/?search=${value}`)
      } catch (err:any) {
        setError('Error fetching movies:'+ err.message);
      }
  }

  useEffect(() => {
    // keep the search in url
    if (searchParam) {
      apiSearch(searchParam);
    }
  }, [searchParam]);


  return (
    <div >
      <SearchInput search={apiSearch}/>
      <Header/>
      <div className=" mx-16   ">
        {movie && movie.length > 0 && (
          <h1 className="text-3xl max-md:text-base font-semibold m-10">Films à découvrir</h1>
        )}
        <div className=" flex flex-wrap  gap-6  justify-between ">
          {movie ? (
            movie.map((item) => <Cards key={item.imdbID} datas={item} />)

            ) : (
              <p>{error}</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default Home