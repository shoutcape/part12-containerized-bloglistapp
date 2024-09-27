import { useContext, createContext, useEffect, useReducer } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return action.payload 
    case 'ERROR':
      return action.payload 
    case 'RESET':
      
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}


export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    '',
  )

  //notification timer
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        notificationDispatch({ type: 'RESET' })
      }, 5000)
    }
  }, [notification, notificationDispatch])

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}
