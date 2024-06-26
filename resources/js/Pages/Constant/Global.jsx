import Notification from '@/Components/Notification'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Global({}) {
    const {user, notifications} = usePage().props
    // console.log(notifications)
    // console.log(user)
  return (
    <>
        <Notification notifications={notifications} user={user}/>
    </>
  )
}
