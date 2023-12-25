import React from 'react';

export const Hero = (props) => {
  return (
    <div className='container'>
      <div className="card border-0" style={{ width: '5rem' }}>
        <img className='img-fluid' src={props.source} class="card-img-top" alt="..." />
        <h5 style={{ fontSize: '15px' }} className="card-title text-center mt-2 fw-semibold">{props.title}</h5>
      </div>
    </div>
  )
}
