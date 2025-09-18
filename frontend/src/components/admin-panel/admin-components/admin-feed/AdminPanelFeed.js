import React, { useState } from 'react';
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

    /*const today = new Date().getFullYear() + '-' + 
    String(new Date().getMonth() + 1).padStart(2, '0') + '-' + 
    String(new Date().getDate()).padStart(2, '0');*/
    
    const formData = new FormData();
    formData.append("title", titleInput);
    formData.append("description", descriptionInput);
    formData.append("category", category);
    formData.append("author", "Twoja Stara");
    formData.append("image", imageFile);
    formData.append("date", new Date().toISOString());

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        alert('Dodano post');
        const data = await res.json();
        setFeedData([...feedData, data]);
      } else {
        alert('Błąd przy dodawaniu postu');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setTitleInput('');
    setCategory('');
    setDescriptionInput('');
    setImageFile(null);
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
