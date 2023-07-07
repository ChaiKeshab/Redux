// import React from 'react'
import zoro from '../Images/zoro.png'
import DeleteAllUsers from "./DeleteAllUsers"
import { testData } from '../assets/testData'
import './Home.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'

const UserDetails = () => {
    const dispatch = useDispatch()

    const addNewUser = (title) => {
        console.log(title)
        dispatch(addUser(title))
    }

    return (
        <>
            <div className='container-home'>
                <div className='image-container'><img src={zoro} alt="Not Found" /></div>
                <div className='items'>
                    <button className='btn-remove'>-</button>
                    <p>Add to cart</p>
                    <button className='btn-add' onClick={() => addNewUser(testData())}>+</button>
                </div>
            </div>
            <div>
                <DeleteAllUsers />
            </div>
        </>
    )
}
export default UserDetails