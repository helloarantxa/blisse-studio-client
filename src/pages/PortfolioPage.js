import React from 'react';

function PortfolioPage() {
  return (
    <div>
      <h1 className="portfolio">Portfolio</h1>
      
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/564x/6a/6d/4c/6a6d4c0ce8a959ba77cced18d405b81e.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/564x/40/3f/a9/403fa969a0e0c0f63cb7a9648841694b.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/564x/33/02/4a/33024a1d850a1b6d73bef20a6149edc4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/564x/6c/69/84/6c69842faa65ac40715a710d4e7ad667.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/564x/7c/3a/4c/7c3a4c7c1728010e823e9094494245f4.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}

export default PortfolioPage;