import React from 'react'

import portcabin from './img/portfolio/cabin.png'
import portcake from './img/portfolio/cake.png'
import portcircus from './img/portfolio/circus.png'
import portgame from './img/portfolio/game.png'
import portsafe from './img/portfolio/safe.png'
import portsubmarine from './img/portfolio/submarine.png'

const PortfolioSection = () => {
  return (
    <section className='page-section portfolio' id='portfolio'>
      <div className='container'>
        <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
          Portfolio
        </h2>
        <div className='divider-custom'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal1'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portcabin} alt='' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal2'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portcake} alt='' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal3'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portcircus} alt='' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5 mb-lg-0'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal4'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portgame} alt='' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5 mb-md-0'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal5'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portsafe} alt='' />
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div
              className='portfolio-item mx-auto'
              data-toggle='modal'
              data-target='#portfolioModal6'
            >
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'>
                  <i className='fas fa-plus fa-3x'></i>
                </div>
              </div>
              <img className='img-fluid' src={portsubmarine} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
