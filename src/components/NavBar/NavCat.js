import React from 'react'

export default function NavCat() {
  return (
    <div className='bg-white shadow py-1'>
      <div className='container'>
        <div className="dropdown">
          <button className="btn dropdown-toggle fw-semibold me-5" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            All Categories
          </button>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item disabled" href="#">Disabled action</a>
            <h6 className="dropdown-header">Section header</h6>
            <a className="dropdown-item" href="#">Action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">After divider action</a>
          </div>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Mobile Phones</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Cars</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Motorcycles</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Houses</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">T.V</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Tablets</a>
          <a style={{ fontSize: '14px' }} className='mx-2' href="">Land & Plots</a>
        </div>
      </div>
    </div>
  )
}
