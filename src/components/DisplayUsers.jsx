import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeUser } from "../store/slices/UserSlice"
import './DisplayUsers.css'

const DisplayUsers = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users  //users of index.jsx of store
    })

    const removeNewUser = (index) => {
        dispatch(removeUser(index))    //using object to pass multiple data (elm, index);
    }

    return (
        <div>
            {data.map((elm, index) => {
                return (
                    <div className="list" key={index}>
                        <button onClick={() => removeNewUser(index)}>delete</button>
                        <div>{elm}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayUsers