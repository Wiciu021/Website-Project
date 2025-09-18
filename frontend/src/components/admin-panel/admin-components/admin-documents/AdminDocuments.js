import React, { useState } from 'react'

const AdminDocuments = ({ documentsData, setDocumentsData }) => {

  const [titleInput, setTitleInput] = useState('');
  const [documentFile, setDocumentFile] = useState(null);
  const [category, setCategory] = useState('');
  // const [descriptionInput, setDescriptionInput] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setDocumentFile(e.target.files[0]);
    } else {
      setDocumentFile(null);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const formData = new FormData();
      formData.append('title', titleInput);
      formData.append('category', category);
      // formData.append('description', descriptionInput);
      formData.append('date', new Date().toISOString());
      formData.append('document', documentFile);
    
      try {
        const res = await fetch('/api/admin/docs', {
          method: 'POST',
          body: formData
        });

        if (res.ok) {
          alert('Dodano dokument');
          const data = await res.json();
          setDocumentsData([...documentsData, data]);
        } else {
          alert('Błąd przy dodawaniu dokumentu');
        }
    } catch (err) {
      console.error('Error submitting form:', err);
    }

    setTitleInput('');
    setCategory('');
    // setDescriptionInput('');
    setDocumentFile(null);  
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Dokumenty</h3>
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
          <button type='submit'>dodaj</button>
        </form>
      </div>
    </main>
  )
}

export default AdminDocuments