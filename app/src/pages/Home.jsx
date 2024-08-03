import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Welcome To WriteVibes</h1>
                    <p>Write what you feel. We enjoy your content and respect your words. <br /> <i>Feel free to read, write and enjoy ♥</i></p>
                    {/* <button className="hero-button">Learn More</button> */}
                    <NavLink className="hero-button" to="/about">Learn More</NavLink>
                </div>


            </div>


            <div className="cards-section container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/3643828/pexels-photo-3643828.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <h5 className="card-title">Stories</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a to="other" className="btn">Go somewhere</a> */}
                                <NavLink className="btn" to="/other">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1083895/pexels-photo-1083895.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <h5 className="card-title">Travel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink className="btn" to="/other">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <h5 className="card-title">Podcasts</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink className="btn" to="/podcast">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Card 4" />
                            <div className="card-body">
                                <h5 className="card-title">Cooking</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink className="btn" to="/other">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

            <div className="image-text-section container">
                <div className="row">
                    <div className="col-lg-6 text-section" justify-content-left="true">
                    <h1 className="color-changing-text">TRAVEL</h1>
          <h1 className="color-changing-text">NATURE</h1>
          <h1 className="color-changing-text">COOKING</h1>
          <h1 className="color-changing-text">FITNESS</h1>
          <h1 className="color-changing-text">STORIES</h1>
          <h1 className="color-changing-text">SHAYARIS</h1>
          <h1 className="color-changing-text">ENTERTAINMENT</h1>
          <h1 className="color-changing-text">ROMANCE</h1>
          <h1 className="color-changing-text">READ WHAT YOU LOVE</h1>
          <h1 className="color-changing-text" style={{ whiteSpace: 'pre-wrap' }}>♥...♥...                      ...♥...♥</h1>

                    </div>
                    <div className="col-lg-6 image-section">
                        <div className="row">
                            <div className="col-12">
                                <img src="https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid box-img" alt="Image 5" />
                            </div>
                            <div className="col-6">
                                <img src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid box-img" alt="Image 6" />
                            </div>
                            <div className="col-6">
                                <img src="https://images.pexels.com/photos/542517/pexels-photo-542517.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid box-img" alt="Image 7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>



    )
}

export default Home
