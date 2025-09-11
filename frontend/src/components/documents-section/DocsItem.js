import React from 'react'
import './docsItem.css'
import { IoDocumentOutline } from 'react-icons/io5';

const DocsItem = ({ item }) => {
  return (
    <li key={item.id}>
      <a href={`/docs-files/${item.href}`} target="_blank" rel="noopener noreferrer">
        <div className='icon-wrapper'><IoDocumentOutline /></div>
        <p className='title'>{item.title}</p>
        <p className='date'>{item.date}</p>
      </a>
    </li>
  )
}

export default DocsItem