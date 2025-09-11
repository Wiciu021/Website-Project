import React from 'react'
import { IoDocumentOutline } from 'react-icons/io5';
import './maturaItem.css'

const MaturaItem = ({ item }) => {
  return (
    <li key={item.id}>
      <a href={`/matura-files/${item.href}.pdf`} target="_blank" rel="noopener noreferrer">
        <div className='icon-wrapper'><IoDocumentOutline className='document-icon'/></div>
        <p className='title'>{item.title}</p>
      </a>
    </li>
  )
}

export default MaturaItem