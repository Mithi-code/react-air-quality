import React from 'react';

export const Home = () => {
  return (
    <>
      <div className='w-full... bg-pink-500'>
        <div className='user-location'>Allow your location</div>
        <div className='list'>
          <ul className='list-none'>
            <li>countryName</li>
          </ul>
          <button type='button' className='px-1.5 py-1.5 bg-indigo-500 ...'>
            See Full List
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;