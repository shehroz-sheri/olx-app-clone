import React from 'react'

export const FootCopy = () => {
  return (
    <div className='py-2' style={{ backgroundColor: '#003049', fontSize: '13px' }}>
      <div className='container d-flex justify-content-end text-white p-0 m-0'>
        <strong className='mx-1 m-0 p-0'>Free Classified in Pakistan. </strong>
        <p className='mx-1 m-0 p-0'> &copy; 2006-{new Date().getFullYear()} OLX</p>
      </div>
    </div>
  )
}
