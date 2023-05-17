import React from 'react'

export const Helmet = (props) => {
    document.title="myproject-"+props.title;
  return (
    <div className='w-100'>{props.children}</div>
  )
}
