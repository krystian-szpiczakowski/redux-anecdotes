import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification)
  const {message} = notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (message) {
      const id = setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
  
      return () => clearTimeout(id)
    }
  })

  return (
    <>
      {
        message && (<div style={style}>{message}</div>)
      }
    </>
  );
}

export default Notification