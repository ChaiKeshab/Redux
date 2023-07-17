import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../store/slices/UserSlice"
import './DisplayUsers.css'

const DisplayUsers = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.users)
    //users of index.jsx of store

    // const removeNewUser = (index) => {
    //     dispatch(removeUser(index))
    // }

    return (
        <div>
            {data.map((elm, index) => {
                return (
                    <div className="list" key={index}>
                        <button onClick={() => dispatch(removeUser(index))}>delete</button>      {/* use object to pass multiple data (elm, index); */}
                        <div>{elm}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayUsers