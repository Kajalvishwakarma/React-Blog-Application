// import React from 'react';
// import Logo1 from '../images/logo.png';


// const Footer = () => {
//     return (
//         <div>
//             <hr />
//             <div
//                 className="container-fluid"
//             >
//                 <div
//                     className="row justify-content-center align-items-center g-2"
//                 >
//                     <div className="col">
//                         <img src={Logo1} alt="Logo" className="thumbnail" style={{ height: '200px', width: '200px' }} />
//                     </div>
//                     <div className="col">
//                         <h4>Most Famous Blogs</h4>
//                         <ul>
//                             <li>Lorem</li>
//                             <li>Lorem</li>
//                             <li>Lorem.</li>
//                             <li>Lorem.</li>
//                         </ul>
//                     </div>
//                     <div className="col">
//                         <h4>Our Services</h4>
//                         <ul>
//                             <li>Beautiful Content</li>
//                             <li>Free Visits</li>
//                             <li>Free Downloads</li>
//                             <li>Create Your Own Content</li>
//                             <li>Available</li>
//                         </ul>
//                     </div>
//                     <div className="col">
//                         <h4>  Subscribe To Us</h4>
//                         <ul>

//                             <span className="d-flex align-items-center my-2 my-lg-0"><input type="email" name="" id="" />
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope mx-2" viewBox="0 0 16 16">
//                                     <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
//                                 </svg>
//                             </span>
//                         </ul>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Footer


import React from 'react';
import Logo1 from '../images/logo.png';
import './Component.css'; // Import your custom CSS

const Footer = () => {
    return (
        <div>
            
            <div className="container-fluid footer-container">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                        <img src={Logo1} alt="Logo" className="thumbnail" style={{ height: '200px', width: '200px', borderRadius:'100px' }} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h4 style={{fontWeight:'bold'}}>Most Famous Blogs</h4>
                        <ul className="list-unstyled">
                            <li>Our Entertainment</li>
                            <li>Story</li>
                            <li>Lorem</li>
                            <li>Podcast</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h4 style={{fontWeight:'bold'}}>Our Services</h4>
                        <ul className="list-unstyled">
                            <li>Beautiful Content</li>
                            <li>Free Visits</li>
                            <li>Free Downloads</li>
                            <li>Create Your Own Content</li>
                            <li>Available</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h4>Subscribe To Us</h4>
                        <div className="subscribe-container">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn mx-2" style={{color:'#DDE6ED', stroke:'ButtonHighlight'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
