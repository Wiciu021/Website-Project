import React, { useState } from 'react'

const AdminZastepstwa = () => {

  const [inputFile, setInputFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setInputFile(e.target.files[0].name);
    } else {
      setInputFile('');
    }
  }

  const handleSubmit = () => {
    //tutaj sobie napisz cala swoja funckje pozdrawiam
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
              value={inputFile}
              onChange={(e) => handleFileChange()}
            />
            <label htmlFor="file-input" className='file-label'>wybierz plik</label>
            <button type='submit'>dodaj</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AdminZastepstwa