import React from 'react'
import './forStudent.css'

const handleShowSubstitutions = async () => {
  try {
    const res = await fetch('/api/substitutions', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    if (data.directUrl) window.open(data.directUrl, '_blank');
  } catch (err) {
    console.error('Error fetching substitutions:', err);
    alert('Nie udało się otworzyć zastępstw');
  }
};

const ForStudent = () => {
  return (
    <section className='for-students-section'>
      <h2>Dla Uczniów</h2>
      <div className='button-container'>
        <button className='button' onClick={handleShowSubstitutions}>Zastępstwa</button>
        <button className='button'>Plan Lekcji</button>
        <button className='button'>Dziennik</button>
      </div>
    </section>
  )
}

export default ForStudent