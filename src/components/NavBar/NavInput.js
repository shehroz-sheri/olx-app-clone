import React from 'react'

export default function NavInput() {
  return (
    <div className='container py-3 px-3 d-flex'>
      <div className='px-3'>
        <img style={{ height: '45px', marginRight: '20px' }} src="https://msk-olx.web.app/static/media/olx_logo.c43bc258c9d976e58c8d.png" alt="" />
      </div>

      <div className='d-flex'>
        <form>
          <input placeholder='Search Location' className='rounded-1 py-2 px-3' type="search" />
          <input placeholder='Search Categories' className='rounded-1 py-2 px-3' type="search" style={{ width: '500px', marginLeft: '30px' }} />
        </form>
        <a className='py-2 fw-semibold fs-5 ms-5' style={{ textDecoration: 'underline', color: '#164B60' }} href="">Login</a>
        <div style={{ position: 'relative' }}>
          <a href="#"><img className='ms-3' style={{ width: '90px', height: '45px' }} src='https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg' alt="" /></a>
          <p style={{ position: 'absolute', top: '47%', left: '55%', transform: 'translate(-50%, -50%)' }}> <a className='fw-semibold' style={{ color: '#164B60' }} href="#">+ Sell</a> </p>
        </div>
      </div>
    </div>
  )
}
