import React from 'react'
import './docsItem.css'
import { IoDocumentOutline } from 'react-icons/io5';

const DocsItem = ({ item }) => {
  return (
    <li key={item.id}>
      <a href={`/docs-files/${item.file}`} target="_blank" rel="noopener noreferrer"><IoDocumentOutline /></a>
      <p className='title'>{item.title}</p>
      <p className='date'>{item.date}</p>
    </li>
  )
}

export default DocsItem