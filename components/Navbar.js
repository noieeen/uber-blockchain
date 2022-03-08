import React from 'react'
import Image from 'next/image'
import UserImage from '../temp/user.png'

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const currentAccount = '0x2a7297C38BfBAE7fa8fb595A39f49DC89307D88F'

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menunItem}>Help</div>
        <div className={style.menunItem}>Lance</div>
        <div className={style.userImageContainer}>
          <Image src={UserImage} width={40} height={40} alt="userImg" />
        </div>
        <div>
          {currentAccount ? (
            <div>
              {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            </div>
          ) : (
            <div>
              <div className={style.loginButton}>
                <div className={style.loginText}>Login</div>
              </div>
            </div>
          )}
        </div>
        <div className={style.loginText}></div>
      </div>
    </div>
  )
}

export default Navbar
