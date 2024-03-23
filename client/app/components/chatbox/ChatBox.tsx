'use client'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
// import { currentUser } from '@clerk/nextjs'


const ChatBox:React.FC = () => {
  const [socket, setSocket] = useState<any>(undefined)
  const [inbox, setInbox] = useState(["hello"])
  const [message, setMessage] = useState("")
  const [roomName, setRoomName] = useState("")

  const handleSendMessage = ()=>{
    socket.emit("message", message, roomName)

  }

  useEffect(()=>{
    const socket  = io("http://localhost:3000")
    setSocket(socket)
  })

  // const user = await currentUser();
  // console.log(user)


  return (
    
    <div className="flex-1">
      
      <div >
        {/* Chat Header */}
        <header className=" bg-green-800 p-4 text-gray-700">
          {/* <h1 className="text-2xl font-semibold">{user?.firstName+ ''}{user?.lastName}</h1> */}
          <h1 className="text-2xl font-semibold"></h1>
       
        </header>
        {/* Chat Messages */}
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {/* Incoming Message */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                // src={user?.imageUrl}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-gray-700">Hey mam</p>
            </div>
          </div>
          {/* Chat Input */}
        </div>
      </div>
  
    <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
      <div className="flex items-center">
        <input
        onChange={(e)=> {setMessage(e.target.value)}}
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2" onClick={handleSendMessage}>
          Send
        </button>
        
      </div>
    </footer>
  </div>
  )
}

export default ChatBox