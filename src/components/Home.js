import React from 'react'
import './Home.css'
import zoro from '../Images/zoro.png'

export default function Home() {
    return (
        <div className='container-home'>
            <div className='image-container'><img src={zoro} alt="Not Found" /></div>
            <div className='items'>
                <button className='btn-remove'>-</button>
                <p>Add to cart</p>
                <button className='btn-add'>+</button>
            </div>
        </div>
    )
}

