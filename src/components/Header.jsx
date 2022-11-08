import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import React  from 'react'
function Header() {
    const [isDark,setIsdark] = useState(true)
    function switchMode(){
        setIsdark(prevState=>!prevState)
    }
  return (
    <div className='header'>
        <div className={`header--mode-switcher ${isDark ? 'dark-mode' : 'light-mode'}`}>
            <h3 className="mode-switcher--hello-text">GoodNight!</h3>
            <div className="mode-switcher--container" onClick={switchMode}>
                <span className="mode-switcher--icon" role='img' aria-label='moon'>🌜</span>
                <span className="mode-switcher--icon" role='img' aria-label='sun'>🌞</span>
                <div className="mode-switcher--ball"></div>
            </div>
        </div>
        <form className='header--form'>
            <div className="from--search-input">
                <BsSearch className='search-input--icon'/>
                <input type="text" placeholder='type to search'/>
            </div>
        </form>
    </div>
  )
}

export default Header