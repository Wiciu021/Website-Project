import { useState, useEffect } from 'react';

export default function TestConnection() {
  const [message, setMessage] = useState('Ładowanie...');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Błąd połączenia:', err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Test połączenia z backendem:</h2>
      {error ? (
        <p style={{ color: 'red' }}>Błąd: {error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}