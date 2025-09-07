import React, { useState } from 'react'

const AdminDocuments = ({ documentsData, setDocumentsData }) => {

  const [titleInput, setTitleInput] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileInput(e.target.files[0].name);
    } else {
      setFileInput('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = documentsData[documentsData.length - 1] + 1;

    const newItem = {
      id: newId,
      title: titleInput,
      date: new Date().getFullYear() + '-' + 
        String(new Date().getMonth() + 1).padStart(2, '0') + '-' + 
        String(new Date().getDate()).padStart(2, '0'),
      href: fileInput,
      folder: category,
      category: category
    }

    setDocumentsData([...documentsData, newItem]);
    setCategory('');
    setTitleInput('');
    setFileInput('');
  }

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Dokumenty</h3>
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
          <div className='input-wrapper'>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt,.odt"
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
              <option value="matura">matura</option>
              <option value="history">historia</option>
            </select>
          </div>
          <button type='submit' onClick={handleSubmit}>dodaj</button>
        </form>
      </div>
    </main>
  )
}

export default AdminDocuments