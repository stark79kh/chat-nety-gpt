import React from 'react'
import { IconCircleChevronRight } from '@tabler/icons-react';

const Login = () => {
  return (
    <div className='Login'>
      <div className='Login_box'>
        <button className='Login_box_button'>
          <div>Start New Chat</div>
          <IconCircleChevronRight/>
        </button>
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
