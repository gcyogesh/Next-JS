import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import ChatBox from '../components/chatbox/ChatBox'

const DashBoardPage = () => {
  return (
    <>
       <div className="flex h-screen overflow-hidden">
    <SideBar/>
    <ChatBox/>
    </div>
    </>
  )
}

export default DashBoardPage