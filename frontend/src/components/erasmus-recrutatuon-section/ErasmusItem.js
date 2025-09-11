import React from 'react'
import './erasmusItem.css'
import { IoDocumentOutline } from 'react-icons/io5';

const ErasmusItem = ({ item }) => {
  return (
    <li key={item.id}>
        <a href={`/erasmus-files/${item.href}`} target="_blank" rel="noopener noreferrer">
          <div className='icon-wrapper'><IoDocumentOutline /></div>
          <p className='title'>{item.title}</p>
        </a>
    </li>
  )
}

export default ErasmusItem