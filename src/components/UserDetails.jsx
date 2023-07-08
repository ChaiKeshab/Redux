// import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser, deleteUser } from '../store/slices/UserSlice'
import { testData } from '../assets/testData'
import DeleteAllUsers from "./DeleteAllUsers"
import DisplayUsers from './DisplayUsers'
import zoro from '../Images/zoro.png'
import './Home.css'

const UserDetails = () => {
    const dispatch = useDispatch()

    const addNewUser = (title) => {
        dispatch(addUser(title))    //of file UserSlice.jsx
    }

    const deleteAll = () =>{
        dispatch(deleteUser())
    }

    return (
        <>
            <div className='container-home'>
                <div className='image-container'><img src={zoro} alt="Not Found" /></div>
                <div className='items'>
                    <button className='btn-remove' onClick={() => deleteAll()}>-</button>
                    <p>Add to cart</p>
                    <button className='btn-add' onClick={() => addNewUser(testData())}>+</button>
                </div>
            </div>
            <div>
                <DisplayUsers />
                <DeleteAllUsers />
            </div>
        </>
    )
}
export default UserDetails