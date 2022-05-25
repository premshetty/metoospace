import React from 'react'
import CarouselCard from './CarouselCard'

function BigCard() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('./hut.jpg')",
          height: '80vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        <div>
          <CarouselCard />
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('./zigjag.png')",
          content: '',
          transform: 'rotate(180deg)',
          marginTop: '-50px',
          position: 'absolute',
          left: ' 0',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '50px',
          width: '100%',
        }}
      >
        {' '}
      </div>
    </div>
  )
}

export default BigCard
