// import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser, deleteUser } from '../store/slices/UserSlice'
import { testData } from '../assets/testData'
import DisplayUsers from './DisplayUsers'
import zoro from '../Images/zoro.png'
import './UserDetails.css'

const UserDetails = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='container-userDetails'>
                <div className='image-container'><img src={zoro} alt="Not Found" /></div>
                <div className='items'>
                    <button className='btn-remove' onClick={() => dispatch(deleteUser())}>-</button>    {/* //of file UserSlice.jsx */}
                    <p>Add to cart</p>
                    <button className='btn-add' onClick={() => dispatch(addUser(testData()))}>+</button>
                </div>
            </div>
            <div>
                <DisplayUsers />
            </div>
        </>
    )
}
export default UserDetails