import React from 'react'

const Main = () => {
  return (
    <section className='ajax-section'>
        <form>
            <input type="text" placeholder='Search for a city' autoFocus />
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