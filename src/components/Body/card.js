import React from 'react'

export const Card = (props) => {
    return (
        <div className='mx-1'>
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={props.imgSrc} className="card-img-top " style={{height:'230px', objectFit:'cover'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Rs {props.price} </h5>
                        <p className="card-text">{props.description}</p>
                        <p className='text-muted p-0 m-0' style={{ fontSize: '14px' }}>{props.location}</p>
                        <p className='text-secondary m-0 p-0' style={{ fontSize: '12px' }}>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
