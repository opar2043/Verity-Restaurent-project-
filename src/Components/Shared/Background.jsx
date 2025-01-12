import React from 'react'

const Background = ({img , head}) => {
  return (
    <div>
        <div
  className="hero h-[600px]"
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{head}</h1>
      <p className="mb-5">
         Here You Will Spend A Good Time Here
      </p>
    
    </div>
  </div>
</div>
    </div>
  )
}

export default Background