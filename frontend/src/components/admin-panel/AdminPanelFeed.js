import React, { useState } from 'react';
import './adminPanelFeed.css';

const AdminPanelFeed = ({ setFeedData, feedData }) => {

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImageFile(e.target.files[0].name);
    } else {
      setImageFile(null);
    }
  };

  const handleClick = (e) => {
    
    const newId = feedData[feedData.length - 1].id + 1;

    const newFeedItem = {
      id: newId,
      title: titleInput,
      description: descriptionInput,
      img: imageFile,
      date: new Date().getFullYear() + '-' + 
        String(new Date().getMonth() + 1).padStart(2, '0') + '-' + 
        String(new Date().getDate()).padStart(2, '0'),
      author: 'Twoja Stara',
      category: category
    }

    setFeedData([...feedData, newFeedItem]);

    e.preventDefault();
    setTitleInput('');
    setCategory('');
    setDescriptionInput('');
    setImageFile(null);
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Aktualnosci</h3>
        <form>
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
            <input
              type="file"
              accept='image/*'
              required
              className='file-input'
              id='file-input'
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className='file-label'>wybierz plik</label>
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
          <button type='submit' onClick={handleClick}>dodaj</button>
        </form>
      </div>
    </main>
  );
};

export default AdminPanelFeed;
