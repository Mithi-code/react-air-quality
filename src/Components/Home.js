/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      <h1>List Of Countries</h1>
      <input
        type="search"
        placeholder="Search Country name "
        value={term}
        onInput={(e) => setTerm(e.target.value.trim())}
      />
      <div className="alter">
        {data
          .filter((f) => f.name.common.toLowerCase().includes(term.toLowerCase()))
          .map((e, i) => (
            <div
              className="container"
              key={i}
              onClick={() => {
                handle(e.name.common, e.flags.png);
              }}
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
