import React from 'react'

const ListItem = ({ item }) => {
  return (
    <li key={item.label}>{item.label}</li>
  )
}

export default ListItem