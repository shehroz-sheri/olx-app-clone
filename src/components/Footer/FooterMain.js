import React from 'react'

export const FooterMain = () => {
  return (
    <div id='section1' className='mt-5' style={{ borderTop: '1px solid lightgray', backgroundColor: '#e5e5e5' }}>
      <div className='d-flex justify-content-around mt-3 pb-2 container'>
        <div className='mb-5 mt-4'>
          <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>POPULAR CATEGORIES</h5>
          <div className='d-flex flex-column'>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Cars</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Flats for Rent</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Mobile Phones</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Jobs</a>
          </div>
        </div>
        <div className='mb-5 mt-4'>
          <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>TRENDING SEARCHES</h5>
          <div className='d-flex flex-column'>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Bikes</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Watches</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Books</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Dogs</a>
          </div>
        </div>
        <div className='mb-5 mt-4'>
          <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>ABOUT US</h5>
          <div className='d-flex flex-column'>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">About Dubizzle Group</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">OLX Blog</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Contact Us</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">OLX for Businesses</a>
          </div>
        </div>
        <div className='mb-5 mt-4'>
          <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>OLX</h5>
          <div className='d-flex flex-column'>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Help</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Sitemap</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Terms of Use</a>
            <a className='text-secondary' style={{ fontSize: '13px' }} href="">Privacy Policy</a>
          </div>
        </div>
        <div className='mb-5 mt-4'>
          <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>FOLLOW US</h5>
          <div>
            <a className='text-secondary mx-1' style={{ fontSize: '13px' }} href=""><img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" /></a>
            <a className='text-secondary mx-1' style={{ fontSize: '13px' }} href=""><img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" /></a>
            <a className='text-secondary mx-1' style={{ fontSize: '13px' }} href=""><img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" /></a>
            <a className='text-secondary mx-1' style={{ fontSize: '13px' }} href=""><img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" /></a>
          </div>
          <div className='mt-4'>
            <a className='mx-1' href=""><img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" /></a>
            <a className='mx-1' href=""><img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" /></a>
            <a className='mx-1' href=""><img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" /></a>
          </div>
        </div>

      </div>
    </div>
  )
}
