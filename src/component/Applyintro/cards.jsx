import React from 'react'

const cards = ({imagesler, siranom,melumat}) => {
  return (
    <div className='cards'>
        <div className='cards-imgs'>
            <img src={imagesler} alt="" />
        </div>
        <div className='cards-about'>
            <h3>{siranom}</h3>
            <span>{melumat}</span>
        </div>
    </div>
  )
}

export default cards