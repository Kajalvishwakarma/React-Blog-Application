import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style_about.css'

const ShowData = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${id}`);
            // navigate('/fitness');
            navigate(-1);
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleBack = () => {
        navigate(-1); // This will navigate to the previous page
    };

    return (
        <div className="container-fluid about-part">
            <div
                className="container"
            >
                <div className="row justify-content-center align-items-center g-2 my-5">
                    <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 px-3">
                        <img src={blog.imageUrl} alt={blog.title} className="thumbnail-big img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8 px-3">
                        <div className="row justify-content-center align-items-center g-2">
                            <div className="col-12">
                                <div
                                    className="row justify-content-center align-items-center g-2"
                                >
                                    <div className="col"><h1 className='display-6'><b>{blog.title}</b></h1>
                                    </div>
                                    <div className="col"><h4><i><b>By: {blog.user}</b></i></h4></div>
                                    
                                </div><br />
                                
                                <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
                                <div className="mt-4">
                                    <button onClick={() => navigate(`/edit/${blog._id}`)} className="btn btn-warning">Edit</button>
                                    <button onClick={handleDelete} className="btn btn-danger mx-2">Delete</button>
                                    <NavLink
                                        name="Back"
                                        id=""
                                        className="btn btn-back"
                                        onClick={handleBack}
                                        role="button"
                                    >Back</NavLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default ShowData;
