import React from 'react';
import { useLocation } from "react-router-dom";

const Chat = () => {
  const location = useLocation();
  const chatId = location.pathname.split("/")[2];

  const handClickNewChat = () => {
    window.location.href = '/';
  }

  return (
    <div className='Chatbox'>
      <div className='Chatbox_head'>
        <button onClick={handClickNewChat}>New Chat</button>
        <div className='Chatbox_head_id'>
          <div>Chat ID</div>
          <input type="text" value={chatId} disabled/>
        </div>
      </div>
      <div className='Chatbox_chat'>
        <div className='Chatbox_chat_box'>
          <textarea placeholder='Send a message'/>
          <button>
            <img width={24} height={24} src="/send-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
