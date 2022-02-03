import { FC } from 'react'

const ShootingStar: FC = ({ children }) => {
  return (
    <div className="w-screen h-96 border-4 border-violet-500">
      <div className="relative z-10 mr-auto animate-moveright">
        <div className="absolute top-1/2 left-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-violet-500 to-blue-500" />
        <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
      </div>
    </div>
  )
}

export default ShootingStar

/*
  I want you to appear every 3 seconds at a random screen location 
  I want you to dismount from the dom when youre animation is done
*/
