import React, { useEffect, useState } from 'react'
import CardList from '../../Components/CardList/CardList'
import { TodayTrends } from '../../api/api';
import { Movie } from '../../Interfaces/Movie';
import Search from '../../Components/Search/Search';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

type Props = {}

const Home = (props: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [periode, setPeriode] = useState<string>("day");



  useEffect(() => {
    const fetchMovies = async () => {
      const results = await TodayTrends(periode); // Call the TodayTrends function
      setMovies(results);

    };
    fetchMovies();
  }, [periode]);


  return (
    <div className='container-fluid CardsList h-100 p-0 m-0'>
      <div className="mx-auto d-flex justify-content-center align-items-center p-0 m-0">
        <Search></Search>

      </div>
      <div className="container mx-auto d-flex justify-content-between py-5 align-items-center">
        <h2 className='text-white header-text'>This {periode} Trending</h2>
        <FormControl className="" >
            <InputLabel className="text-white-50 " id="period-select-label">Period</InputLabel>
        <Select className=" text-white-50" 
                labelId="period-select-label"
                id="period-select"
                value={periode}
                onChange={(e)=>{setPeriode(e.target.value)}}
                label="Period"
                >
        <MenuItem  value="day">Day</MenuItem>
        <MenuItem value="week">Week</MenuItem>
      </Select>
    </FormControl>
      </div>
<CardList movies={movies} ></CardList>
</div>
  )
}

export default Home