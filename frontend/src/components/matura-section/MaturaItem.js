import React from 'react'
import { IoDocumentOutline } from 'react-icons/io5';
import './maturaItem.css'

const MaturaItem = ({ item }) => {
  return (
    <li key={item.id}>
      <a href={`/matura-files/${item.href}.pdf`} target="_blank" rel="noopener noreferrer"><IoDocumentOutline /></a>
      <p className='title'>{item.title}</p>
    </li>
  )
}

export default MaturaItem