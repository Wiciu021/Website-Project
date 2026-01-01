import React, { useEffect, useState } from 'react'
import './teachingStaffSection.css'
import TeachingStaffItem from './TeachingStaffItem'
import TeachingStaffPopUp from './TeachingStaffPopUp'
//import teachingStaffData from '../../Data/teaching-staff-data'

const TeachingStaffSection = ({ teachingStaffData }) => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/api/zespol-nauczycieli');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeachers(data);
      } catch (err) {
        console.error('Error fetching teachers:', err);
        setError('Failed to load teachers');
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    if (showPopUp) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';  
      document.body.style.overflowY = 'auto';
    }
  }, [showPopUp]);


  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <section className='teaching-staff-section page-section'>
      <div className='teaching-staff-container' style={{
        filter: showPopUp ? 'blur(10px)' : 'none',
        pointerEvents: showPopUp ? 'none' : 'all'
      }}>
        <h2>Zespół nauczycieli</h2>
        <div className='teaching-staff-wrapper'>
          <h3>Dyrekcja</h3>
          <div className='head-teachers-wrapper'>
            {teachers
              .filter(item => item.category === 'headTeacher')
              .map(item => (
                <TeachingStaffItem 
                  key={item.id} 
                  item={item} 
                  showPopUp={showPopUp} 
                  setShowPopUp={setShowPopUp} 
                />
              ))}
          </div>
          <h3>Nauczyciele</h3>
          <div className='teachers-wrapper'>
            {teachers
              .filter(item => item.category === 'teacher')
              .map(item => (
                <TeachingStaffItem 
                  key={item.id} 
                  item={item} 
                  showPopUp={showPopUp} 
                  setShowPopUp={setShowPopUp} 
                />
              ))}
          </div>
        </div>
      </div>
      {showPopUp && (
        <TeachingStaffPopUp 
          itemId={showPopUp} 
          setShowPopUp={setShowPopUp}
          teachers={teachers}
        />
      )}
    </section>
  )
}

export default TeachingStaffSection