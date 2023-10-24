import React from 'react'
import { useLocation } from 'react-router-dom';

const FullView = () => {
  const location = useLocation();
  console.warn({ location });
  return (
    <>
      <div className='full_view'>
        <h1>{location?.state?.viewData?.title}</h1>
        <p>{location?.state?.viewData?.content}</p>
      </div>
    </>
  )
}

export default FullView