import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Podcast = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs');
                const podcastBlogs = response.data.filter(blog => blog.category === 'podcast');
                setBlogs(podcastBlogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="container-fluid my-component">
          <div className="container my-5">
           <div className="row justify-content-center align-items-center g-2">
             <div className="col-6 col-md-3 col-lg-2 my-2">
               <img src="https://avatars.mds.yandex.net/i?id=4ef69fd8308e0fb1572a4c9061358a372b85a805-11846045-images-thumbs&n=13" alt="" className="img-fluid-fit rounded-circle" />
             </div>
             <div className="col-6 col-md-3 col-lg-2 my-2">
               <img src="https://images.pexels.com/photos/4167169/pexels-photo-4167169.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid rounded-circle" />
             </div>
             <div className="col-6 col-md-3 col-lg-2 my-2">
               <img src="https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid-fit rounded-circle" />
             </div>
             <div className="col-6 col-md-3 col-lg-2 my-2">
               <img src="https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid-fit rounded-circle" />
             </div>
           </div>
         </div>
            {/* <div className="container my-5">
                <div className="row justify-content-center align-items-center g-2">
                    {blogs.map(blog => (
                        <div key={blog._id} className="col-6 col-md-3 col-lg-2 my-2">
                            <img src={blog.imageUrl} alt={blog.title} className="img-fluid rounded-circle" />
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="container my-5">
                <div className="row justify-content-center align-items-center g-4">
                    {blogs.map(blog => (
                        <div key={blog._id} className="col-12 col-md-6 col-lg-4 my-2">
                            <div className="card-container">
                            <div className="card-fitness">
                                    <div className="card-front">
                                        <img className="card-img" src={blog.imageUrl} alt={blog.title} />
                                        <div className="card-img-overlay">
                                            <h4 className="card-title-fit">{blog.title}</h4><br />
                                            <h4><b>Author Name:</b><br /> <i>{blog.user}</i></h4>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="row">
                                            <div className="col text-center">
                                                <p className="card-text-fit">{blog.content.substring(0, 50)}...</p>
                                            </div>
                                        </div>
                                        <br /><br />
                                        <div className="row mt-3">
                                            <div className="col text-center">
                                                <Link to={`/show/${blog._id}`} className="btn btn-read-more">Read More</Link>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Podcast;
