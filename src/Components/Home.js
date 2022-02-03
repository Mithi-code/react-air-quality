import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesData } from '../Redux/HomeInfo'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'



export const Home = () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state.restcountriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCountriesData())
  },[])
  const [term , setTerm] = useState('');
  const handle = (name , flag) => {
    navigate(`/details/${name}`, { state: { name, flag } });
  }
  return (
    <>
    <h1>List Of Countries</h1>
    <input type="search" placeholder="Search Country name " value={term} onInput={(e)=> setTerm(e.target.value.trim()) }/>
    <div className="alter">
      {data.filter((f)=> f.name.common.toLowerCase().includes(term.toLowerCase())).map((e, i) => (
        <div className="container" key={i} onClick={() => {handle(e.name.common, e.flags.png)}}>
          <img src={e.flags.png} className="img" />
          <p><b>Name:</b> {e.name.common}</p>
          <p><b>Capital:</b> {e.capital}</p>
          <p><b>Popullation:</b> {e.population}</p>
        </div>
      )
      )}
    </div>
  </>
  );
};

export default Home;