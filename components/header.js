import { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import Image from 'next/image'
import UploadButton from './uploadButton'
import {IconContext} from "react-icons";
import { AiFillLike } from "react-icons/ai";
import { TbWorldDownload } from "react-icons/tb";
 import { ImMenu3 } from "react-icons/im";


const style = {
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  iconContainer: `ml-10  `,
  title: `text-6xl font-extrabold`,
  header: `bg-green-500 max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  playlistTextContent: `justify-center flex items-center mt-20 mr-10  rounded-full`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3`,
  controlsContainer: `flex items-center justify-center mt-10`,
  playButton: `bg-white-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`,
}

const Header = ({ setShowUploadMusic }) => {
  const { currentSong } = useContext(SpotifyContext)

  return (
    <div className={style.header}>
      <div className={style.headerWrapper}>
      <div className='flex items-center'>
          <div className={style.arrowButton}>
            <img alt='' src='assets/chevronLeft.svg' width={20} height={20} />
          </div>
          <div className={style.arrowButton}>
            <img alt='' src='assets/chevronRight.svg' width={20} height={20} />
          </div>
        </div>

        <div className={style.headerRight}>
          <UploadButton setShowUploadMusic={setShowUploadMusic} />

          <div className={style.profile}>
            <div className={style.profileAvatarContainer}>
              <img alt='' src='assets/avatar.jpg' className='rounded-full' />
            </div>
            <p>User</p>
          </div>
        </div>
      </div>

      <div className={style.playlistTextContent} >
        <Image
          alt=''
          src='https://angartwork.akamaized.net/webp/?id=150949021&size=296'
          width={280}
          height={280}
        />

        <div className='ml-5'>
          <div>ALBUM</div>
          <div className={style.title}>Your Album</div>
          <div className='flex items-center mt-5'>
            <div className={style.profileAvatarContainer}>
              <img alt='' src='assets/avatar.jpg' className='rounded-full' />
            </div>
            <p>
              <span className='text-bold'>SteamBeats</span> • 2022  • 46 songs, 3
              hr 20 min
            </p>
          </div>
        </div>
      </div>

      <div className={style.controlsContainer}>
        <div className={style.playButton}>
          <img alt='' src='assets/play.svg' width={30} height={30} />
        </div>
        <div className={style.iconContainer}>
        <IconContext.Provider value={{color: 'black', size: 40 }}>
      <AiFillLike />
    </IconContext.Provider>
    </div>
    <div className={style.iconContainer}>
        <IconContext.Provider value={{ color: 'black' ,size: 40 }}>
      <TbWorldDownload />
    </IconContext.Provider>
    </div>
        <div className={style.iconContainer}>
        <IconContext.Provider value={{ color: 'black' ,size: 40 }}>
      <ImMenu3 />
    </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Header