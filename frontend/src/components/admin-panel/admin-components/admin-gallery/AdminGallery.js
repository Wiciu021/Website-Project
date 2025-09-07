import React, { useState } from 'react'
// import './adminGallery.css'

const AdminGallery = ({ galleryData, setGalleryData }) => {

  const [titleInput, setTitleInput] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {  
      const newArray = Array.from(e.target.files).map(dataItem => dataItem.name);
      setImageFiles(newArray);
    } else {
      setImageFiles([]);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    const newId = galleryData[galleryData.length - 1] + 1;

    const newElement = {
      id: newId,
      folder: 'twojaStara',
      title: titleInput,
      description: descriptionInput,
      img: imageFiles[0],
      date: new Date().getFullYear() + '-' + 
        String(new Date().getMonth() + 1).padStart(2, '0') + '-' + 
        String(new Date().getDate()).padStart(2, '0'),
      children: imageFiles
    }

    setGalleryData([...galleryData, newElement]);

    setImageFiles([]);
    setDescriptionInput('');
    setTitleInput('');
  }

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Zdjecia</h3>
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
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className='file-label'>wybierz zdjecia</label>
            <button type='submit' onClick={handleClick}>dodaj</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AdminGallery