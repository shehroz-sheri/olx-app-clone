import React from 'react'
import { Hero } from './hero';

export const Categ = () => {

    return (
        <div className="container">
            <h3 className='my-5'>All Categories</h3>
            <div className="container">
                <div className='mb-0 container'>
                    <div className='container d-flex my-4'>
                        <Hero title='Mobiles' source = 'https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png' />
                        <Hero title='Vehicles' source = 'https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png' />
                        <Hero title='Property For Sale' source = 'https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png' />
                        <Hero title='Property For Rent' source = 'https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png' />
                        <Hero title='Electronics & Home Appliances' source = 'https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png' />
                        <Hero title='Bikes' source = 'https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png' />
                        <Hero title='Business, Industrial & Agriculture' source = 'https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png' />
                    </div>

                    <div className='container d-flex my-4'>
                    <Hero title='Services' source = 'https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png' />
                    <Hero title='Jobs' source = 'https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png' />
                    <Hero title='Animals' source = 'https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png' />
                    <Hero title='Furniture & Home Decor' source = 'https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png' />
                    <Hero title='Fashion & Beauty' source = 'https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png' />
                    <Hero title='Books, Sports & Hobbies' source = 'https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png' />
                    <Hero title='Kids' source = 'https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}
