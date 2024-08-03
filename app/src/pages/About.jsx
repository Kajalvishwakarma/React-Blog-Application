import React from 'react';
import { NavLink } from 'react-router-dom';
import './style_about.css'

const About = () => {
  return (
    <div className="container-fluid about-part">
      <div className="container">
        <div className="row justify-content-center align-items-center g-2 my-5">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4 px-3">
            <img 
              src="https://images.pexels.com/photos/20337836/pexels-photo-20337836/free-photo-of-blue-tit-landing-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="about" 
              className="thumbnail-big img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-6 px-3">
            <h2>Our Content About Nature</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus libero accusamus veniam doloribus quas quidem. Corporis eos explicabo quo!</p>
            <div className="row justify-content-center align-items-center g-2">
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/21597728/pexels-photo-21597728/free-photo-of-spotted-lady-beetles-on-a-chamomile-flower.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/698275/pexels-photo-698275.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-2 my-5">
          <div className="col-12 col-md-6 col-lg-7 col-xl-6 px-3">
            <h2>Our Content About Fitness</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus libero accusamus veniam doloribus quas quidem. Corporis eos explicabo quo!</p>
            <div className="row justify-content-center align-items-center g-2">
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/6916300/pexels-photo-6916300.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/11585118/pexels-photo-11585118.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink className="nav-link mx-2" to="https://www.instagram.com" aria-current="page">
                  <img 
                    src="https://images.pexels.com/photos/2118483/pexels-photo-2118483.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="about" 
                    className="thumbnail-small img-fluid" 
                    style={{ height: '130px', width: '130px' }} 
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 col-xl-4 px-3">
            <img 
              src="https://images.pexels.com/photos/13849063/pexels-photo-13849063.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="about" 
              className="thumbnail-big img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img 
                  className="card-img-top" 
                  src="https://images.pexels.com/photos/843256/pexels-photo-843256.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Title" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className="card-body">
                  <h4 className="card-title">See Our Content</h4>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa natus maxime animi ipsum quisquam asperiores eius sequi et molestias odio?</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img 
                  className="card-img-top" 
                  src="https://images.pexels.com/photos/5965918/pexels-photo-5965918.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Title" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className="card-body">
                  <h4 className="card-title">Interesting Facts</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati fugiat, ratione accusamus sint nulla. Numquam voluptatem autem vero omnis?</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img 
                  className="card-img-top" 
                  src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Title" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className="card-body">
                  <h4 className="card-title">Interesting Stories</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores architecto quaerat dolor, earum nobis nulla cum autem magnam magni velit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
