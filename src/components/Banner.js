import React from 'react';

import Users from '../compoents/img/banner-img.png';

const Banner = () => {

  return <section>
    <div className="container mx-auto">
      <div className="row">
        <div className="col-md-6">
          <div className="banner-content">
            <h1>Get your <span>free</span> account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-img">
            <img src={Users} alt="banner" />
          </div>
        </div>
      </div>
    </div>

  </section>;
};

export default Banner;
