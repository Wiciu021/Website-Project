import React, { useState } from 'react'

const AdminTeachers = ({ teachersData, setTeachersData }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [position, setPosition] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      imageFile(e.target.files[0]);
    } else {
      imageFile('');
    }
  }

  const handleSubmit = () => {
    const newId = teachersData[teachersData.length - 1].id + 1;

    const newItem = {
      id: newId,
      name: name,
      surname: surname,
      jobClassification: position,
      roleType: category,
      img: imageFile
    }

    setTeachersData([...teachersData, newItem]);
  }

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Nauczyciela</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type="text"
              name='name'
              id='name'
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)} 
              value={name}
            />
            <label htmlFor="name">Imie</label>
          </div>
          <div className='input-container'>
            <input
              type="text"
              name='surname'
              id='surname'
              placeholder=" "
              required
              onChange={(e) => setSurname(e.target.value)} 
              value={surname}
            />
            <label htmlFor="surname">Nazwisko</label>
          </div>
          <div className='input-container'>
            <input
              type="text"
              name='position'
              id='position'
              placeholder=" "
              required
              onChange={(e) => setPosition(e.target.value)} 
              value={position}
            />
            <label htmlFor="position">Pozycja</label>
          </div>
        
          <div className='input-wrapper'>
            <input
              type="file"
              accept="'/*image'"
              required
              className='file-input'
              id='file-input'
            />
            <label htmlFor="file-input" className='file-label'>wybierz zdjecie</label>
            <select
              name="category"
              id="category"
              required
              className='select'
              onChange={(e) => setCategory(e.target.value)} 
              value={category}
            >
              <option value="">wybierz kategorie</option>
              <option value="teacher">nauczyciel</option>
              <option value="headTeacher">dyrektor</option>
            </select>
          </div>
            <button type='submit'>dodaj</button>
        </form>
      </div>
    </main>
  )
}

export default AdminTeachers