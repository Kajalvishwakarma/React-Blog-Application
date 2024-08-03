import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBlog = {
            title,
            imageUrl,
            content,
            category,
            user,  // Replace with actual user logic
        };

        console.log('Submitting new blog:', newBlog);
        
        try {
            const response = await axios.post('http://localhost:5000/api/blogs', newBlog);
            console.log('Blog created:', response.data);
            // Reset form
            setTitle('');
            setImageUrl('');
            setContent('');
            setCategory('');
            setUser('');
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div className="container-fluid create-content">
            <div className="overlay"></div>
            <div className="row justify-content-center align-items-center g-2 my-4">
                <div className="col-md-9 ">
                
                    <form onSubmit={handleSubmit} className='form-part'>
                    <h2 className='text-center display-5'>Create Your Blog</h2>
                        <div
                            className="row justify-content-center align-items-center g-2"
                        >
                            <div className="col">
                            <div className="mb-3 my-4">
                            <label htmlFor="user" className="form-label">Author's Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="user"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                placeholder=""
                                required
                            />
                        </div>
                            </div>
                            <div className="col">
                            <div className="mb-3 my-4">
                            <label htmlFor="title" className="form-label">Blog Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder=""
                                required
                            />
                        </div>
                            </div>
                            
                        </div>
                        
                        <div className="mb-3 my-4">
                            <label htmlFor="imageUrl" className="form-label">Image URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                        <div className="mb-3 my-4">
                            <label htmlFor="content" className="form-label">Your Blog Content</label>
                            <textarea
                                className="form-control"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-3 my-4">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select
                                className="form-control"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="fitness">Fitness</option>
                                <option value="study">Study</option>
                                <option value="romance">Romance</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="podcast">Podcast</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3 my-4">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
