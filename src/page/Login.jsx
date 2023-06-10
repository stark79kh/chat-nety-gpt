import React, { useState } from 'react'
import { IconCircleChevronRight, IconLoader2 } from '@tabler/icons-react';
import ModalErrLogin from '../components/ModalErrLogin';

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [interChatID, setInterChatID] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handClickJoin = () => {
    if(interChatID.trim().length !== 0) {
      window.location.href = `/chat/${interChatID}`;
    } else {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    }
  }

  const handClickChat = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/chat/123456789';
    }, 1000);
  }
  return (
    <>
    <div className='Login'>
      {modalOpen && <ModalErrLogin/>}
      <div className='Login_box'>
        { !isLoading && 
        <button className='Login_box_button' onClick={handClickChat}>
          <div>Start New Chat</div>
          <IconCircleChevronRight/>
        </button> }
        { isLoading && 
        <button className='Login_box_button'>
          <div className='Login_box_button_icon'>
            <IconLoader2/>
          </div>
          <div>Loading...</div>
        </button> }
        <hr className='Login_box_hr' />
        <div className='Login_box_login'>
          <input type="text" placeholder='Enter Chat ID' onChange={e => setInterChatID(e.target.value)} />
          <button className='Login_box_login_button' onClick={handClickJoin}>Join</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Login
