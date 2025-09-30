import React, { useState } from 'react';
import authService from '../../../../services/authService.js';
import './adminPanelFeed.css';

const AdminPanelFeed = ({ setFeedData, feedData }) => {

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    } else {
      setImageFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", titleInput);
    formData.append("description", descriptionInput);
    formData.append("category", category);
    formData.append("author", "Admin");
    formData.append("image", imageFile);
    formData.append("date", new Date().toISOString());

    try {
      const token = await authService.updateToken();
      
      console.log('Making request with token:', token ? 'Present' : 'Missing');

      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` //skibidi
        },
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        setFeedData([...feedData, data]);
        alert('Post created successfully!');
        
        setTitleInput('');
        setDescriptionInput('');
        setImageFile(null);
      } else {
        const error = await res.json();
        console.error('Server error:', error);
        alert(`Error creating post: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error occurred');
    }
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Aktualnosci</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type="text"
              name='title'
              id='title'
              placeholder=" "
              required
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <label htmlFor="title">Tytul</label>
          </div>
          <div className='area-container'>
            <textarea
              name='message'
              id='message'
              placeholder=" "
              required
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
            <label htmlFor="message">Wiadomość</label>
          </div>
          <div className='input-wrapper'>
            <div className='file-wrapper'>
              <input
                type="file"
                accept='image/*'
                required
                className='file-input'
                id='file-input'
                onChange={handleFileChange}
              />
              <label htmlFor="file-input" className='file-label'>wybierz plik</label>
            </div>
            <select
              name="category"
              id="category"
              required
              className='select'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">wybierz kategorie</option>
              <option value="school">szkola</option>
              <option value="erasmus">erasmus</option>
            </select>
          </div>
          <button type='submit'>dodaj</button>
        </form>
      </div>
    </main>
  );
};

export default AdminPanelFeed;
