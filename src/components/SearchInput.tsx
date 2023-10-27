import {BsSearch} from 'react-icons/bs'
import {useState} from 'react'

interface SearchInputProps {
  search: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({search}) => {

  const [value, setValue] = useState<string>("")

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
    // console.log(setValue);
    
  }
  const handleSubmit = () =>{
    // action when we click on the icon that we took on the Home page as props
    search(value)
    
  }

  const handleKeyDown = (e:React.KeyboardEvent) =>{
    // action when we press the key enter
    if(e.key === 'Enter'){
      search(value);
      
    }
    
  }

  return (
    <form className="flex items-center justify-center p-5  ">
      <div className="rounded-lg p-5 w-1/2  max-sm:w-full ">
        <div className="flex border-b-2 border-black ">          
          <input 
            type="text" 
            value={value}
            onChange={handleChange}
            onKeyDown ={handleKeyDown}
            className=" bg-[#ffffffed]  w-full  text-xl max-sm:text-xs  text-gray-900  font-handlee  pl-2  font-semibold outline-0  rounded-none text-center" 
            placeholder="Ecris un mot et découvre le film" 
          />
          <div className="flex w-20  bg-[#ffffffed] items-center justify-center rounded-tr-lg  rounded-br-lg  p-5">
            <BsSearch 
              type="submit" 
              onClick={handleSubmit} 
              color="black"
              size={25}
            />
          </div>
        </div>
      </div>
    </form>   
  )
}

export default SearchInput