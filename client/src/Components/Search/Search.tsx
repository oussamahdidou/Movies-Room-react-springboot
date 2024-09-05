import React, { useState } from 'react'
import './Search.css';
import { useNavigate } from 'react-router';
type Props = {}

const Search = (props: Props) => {
  const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");
    const SearchMovies = (): void => {
        navigate(`/search?q=${search}`)
    }

    const handleQuery = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setSearch(e.target.value)
    }
  return (
    <div style={{ backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + "/img/poster.jpg"})` }} className='container-fluid mx-0 px-0 py-5 search-header d-flex justify-content-center align-items-center'>
         <div className="group py-5">
          <svg onClick={() => SearchMovies()} viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input
            id="query"
            value={search}
            className="input"
            type="search"
            placeholder="Search..."
            name="searchbar"
            onChange={(e) => handleQuery(e)}
          />
        </div>
    </div>
  )
}

export default Search