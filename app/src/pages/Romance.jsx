import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Romance = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs');
                const romanceBlogs = response.data.filter(blog => blog.category === 'romance');
                setBlogs(romanceBlogs);
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
                        <img src="https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid-fit rounded-circle" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 my-2">
                        <img src="https://images.pexels.com/photos/11217203/pexels-photo-11217203.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 my-2">
                        <img src="https://images.pexels.com/photos/10090891/pexels-photo-10090891.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid-fit rounded-circle" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 my-2">
                        <img src="https://images.pexels.com/photos/13758572/pexels-photo-13758572.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid-fit rounded-circle" />
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

export default Romance;
