import React, { useState } from 'react'
import authService from '../../../../services/authService.js';
import { createRipple, clearRipple } from '../../../../hooks/rippleEffect.js';

const AdminZastepstwa = () => {
  const [substitutionFile, setSubstitutionFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSubstitutionFile(e.target.files[0].name);
    } else {
      setSubstitutionFile('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("file", substitutionFile);
    formData.append("date", new Date().toISOString());

    try {
      const token = await authService.updateToken();

      console.log('Making request with token:', token ? 'Present' : 'Missing');

      const res = await fetch('/api/admin/substitutions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        alert('Substitution added successfully!');
      } else {
        const error = await res.json();
        console.error('Server error:', error);
        alert(`Error adding substitution: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error occurred');
    }

    setSubstitutionFile(null);
  }

  return (
    <main className='main'>
      <div className='wrapper'>
        <h3>Dodaj Zastepstwa</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt,.odt"
              required
              className='file-input'
              id='file-input'
              //value={substitutionFile}
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className='file-label'>wybierz plik</label>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple} type='submit'>dodaj</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AdminZastepstwa