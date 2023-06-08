import React, { useState } from 'react'
import { IconCircleChevronRight, IconLoader2 } from '@tabler/icons-react';

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const handClickChat = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/chat';
    }, 1000);
  }
  return (
    <div className='Login'>
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
          <input type="text" placeholder='Inter Chat ID' />
          <button className='Login_box_login_button'>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Login
