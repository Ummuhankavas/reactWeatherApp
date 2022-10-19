import { useState } from "react";
import React from 'react';

const Main = () => {
    const [searchText, setsearchText] = useState('');
    const handleChange = (e)=> {
        setsearchText(e.target.value);
    };

    const getWeatherDatafromApi = async()=> {
        
    }

  return (
    <section className='main'>
        <form>
            <input onChange={handleChange} type="text" placeholder='Search for a city' autoFocus />
            <button type='submit'>SUBMIT</button>
            <span className='msg'></span>
        </form>
        <div className="container">
            <ul className="cities">

            </ul>
        </div>
    </section>
  );
};

export default Main;