import React from 'react'
import NotificationPanel from '../Components/NotificationPanel/NotificationPanel'

const Notification = ({isDev}) => {
  return (
    <div>
      <NotificationPanel isDev={isDev}/>
    </div>
  )
}

export default Notification
