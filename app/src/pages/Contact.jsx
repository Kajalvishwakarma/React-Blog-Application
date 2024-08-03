import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [query, setQuery] = useState('');
  

  const handleSubmit = async (e) => {
      e.preventDefault();

      const newContact = {
          name,
          email,
          contact,
          query,
            // Replace with actual user logic
      };

      try {
          const response = await axios.post('http://localhost:5000/api/contacts', newContact);
          console.log('Blog created:', response.data);
          // Reset form
          setName('');
          setEmail('');
          setQuery('');
          setContact('');
          
      } catch (error) {
          console.error('Error submitting your query:', error);
      }
  };

  return (
    <div>
      <div className="contact-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us For More Information</h1>
          <p>Write what you feel. We enjoy your content and respect your words. <br /> <i>Feel free to read, write and enjoy ♥</i></p>
          <button className="hero-button">Learn More</button>
        </div>


      </div>


      <div
        className="container-fluid contact"
      >
        <div
          className="row justify-content-center align-items-center g-2"
        >
          <div className="col-md-5">
            <form onSubmit={handleSubmit} method="post">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="formId1"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="formId1">Your Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="formId2"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="formId2">Your Email-Id</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="contact"
                  id="formId3"
                  placeholder=""
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <label htmlFor="formId3">Your Contact</label>
              </div>

              <div className="form-floating mb-3">
                <textarea cols="60" rows="10" className="form-control" name="query" id="formId4" value={query}
                  onChange={(e) => setQuery(e.target.value)}></textarea>
                <label htmlFor="formId4" style={{ color: 'black', fontSize: '19px' }}>Your Query</label>
              </div>

              <button type="submit" className='btn'>Submit</button>




            </form>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
