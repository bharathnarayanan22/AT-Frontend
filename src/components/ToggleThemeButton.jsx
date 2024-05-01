import React from 'react'
import { Button } from 'antd';
import {HiOutlineSun,HiOutlineMoon} from 'react-icons/hi';

const ToggleThemeButton = ({darkTheme,toggleTheme}) => {
  return <div className='toggle-theme-btn'>
    <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineMoon/> : <HiOutlineSun/>}

    </Button>  
    </div>
  
}

export default ToggleThemeButton
