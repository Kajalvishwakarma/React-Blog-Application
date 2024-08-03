import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

const EditBlog = () => {
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

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
            navigate(`/show/${id}`); // Redirect to show page after update
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const handleBack = () => {
        navigate(-1); // This will navigate to the previous page
    };

    return (
        <div className="container-fluid edit-content">
            {/* <div className="overlay"></div> */}
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col-md-9">

                    <form onSubmit={handleSubmit} className='form-edit'>
                        <h2 className='text-center display-5'>Edit Blog</h2>
                        <div
                            className="row justify-content-center align-items-center g-2"
                        >
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="user" className="form-label">Author's Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="user"
                                        name="user"
                                        value={blog.user}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Blog Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={blog.title}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label">Image URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="imageUrl"
                                name="imageUrl"
                                value={blog.imageUrl}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Blog Content</label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="content"
                                rows="5"
                                value={blog.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Blog Category</label>
                            <select
                                className="form-control"
                                id="category"
                                name='category'
                                value={blog.category}
                                required
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                <option value="fitness">Fitness</option>
                                <option value="study">Study</option>
                                <option value="romance">Romance</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="podcast">Podcast</option>
                                <option value="other">Other</option>
                            </select>
                            {/* <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="categroy"
                                value={blog.category}
                                onChange={handleChange}
                            /> */}
                        </div>
                        <div>
                            <div
                                className="row justify-content-center align-items-center g-2"
                            >
                                <div className="col"><button type="submit" className="btn">Update</button>
                                </div>
                                <div className="col"><NavLink
                                    name="Back"
                                    id=""
                                    className="btn"
                                    role="button"
                                    onClick={handleBack}
                                >Back</NavLink
                                ></div>

                            </div>

                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default EditBlog;
