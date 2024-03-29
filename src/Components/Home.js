import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountriesData } from '../Redux/HomeInfo';

export function Home() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.restcountriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesData());
  }, []);
  const [term, setTerm] = useState('');
  const handle = (name, flag) => {
    navigate(`/details/${name}`, { state: { name, flag } });
  };
  return (
    <>
      <h1 className="italic">List Of Countries</h1>
      <input
        type="search"
        placeholder="Search Country name "
        value={term}
        onInput={(e) => setTerm(e.target.value.trim())}
      />
      <div className="alter">
        {data
          .filter((f) => f.name.common.toLowerCase().includes(term.toLowerCase()))
          .map((e) => (
            <div
              className="container"
              key={e.name.common}
              onClick={() => {
                handle(e.name.common, e.flags.png);
              }}
              aria-hidden="true"
            >
              <img src={e.flags.png} className="img" alt="flag" />
              <p>
                <b>Name:</b>
                {' '}
                {e.name.common}
              </p>
              <p>
                <b>Capital:</b>
                {' '}
                {e.capital}
              </p>
              <p>
                <b>Popullation:</b>
                {' '}
                {e.population}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
