import React, { useState } from 'react'
import authService from '../../../../services/authService';
import { createRipple, clearRipple } from '../../../../hooks/rippleEffect';
const AdminTeachers = ({ teachersData, setTeachersData }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [position, setPosition] = useState('');
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
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("position", position);
    formData.append("category", category);
    formData.append("image", imageFile);

    try {
      const token = await authService.updateToken();

      console.log('Making request with token:', token ? 'Present' : 'Missing');

      const res = await fetch('/api/admin/teachers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        setTeachersData([...teachersData, data]);
        alert('Teacher added successfully!');
      } else {
        const error = await res.json();
        console.error('Server error:', error);
        alert(`Error adding teacher: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error occurred');
    }

    setName('');
    setSurname('');
    setPosition('');
    setImageFile(null);
    setCategory('');
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
              onChange={handleFileChange}
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
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple} type='submit'>dodaj</button>
        </form>
      </div>
    </main>
  )
}

export default AdminTeachers