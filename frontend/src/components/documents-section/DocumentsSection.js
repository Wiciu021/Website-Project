import React, { useState, useEffect } from 'react';
import './documentsSection.css';
import DocsItem from './DocsItem';

const DocumentsSection = () => {
  const [documentsData, setDocumentsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/dokumenty-szkolne');
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        const data = await response.json();
        setDocumentsData(data);
      } catch (err) {
        console.error('Error fetching documents:', err);
        setError(err.message);
      }
    };

    fetchDocuments();
  }, []);

  if (error) {
    return <div>Error loading documents: {error}</div>;
  }

  return (
    <section className='documents-section page-section'>
      <div className='docs-wrapper'>
        <h2>Dokumenty Szkolne</h2>
        <ul>
          {documentsData.map(docsItem => (
            <DocsItem key={docsItem.id} item={docsItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DocumentsSection;