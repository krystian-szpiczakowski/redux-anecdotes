import { useSelector } from "react-redux"

const Notification = () => {

  const notification = useSelector(state => state.notification)
  const {message} = notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
      {
        message && (<div style={style}>{message}</div>)
      }
    </>
  );
}

export default Notification