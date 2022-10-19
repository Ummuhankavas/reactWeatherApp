import React from 'react'

const Header = () => {
    return (
        <section className="top-banner">
          <div className="container">
            <center>
              <img 
                src="https://purepng.com/public/uploads/large/weather-forecast-symbol-v7o.png"
                alt="Bank logo"
                className="nav__logo"
                id="logo"
              />
              <h1 className="heading">Weather App</h1>
            </center>
          </div>
        </section>
      );
    };

export default Header;