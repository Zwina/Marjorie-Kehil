"use client"
import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'


export default function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div  onClick={() => set(state => !state)}>
      <a.div
        className="c back profile-img" width={300} height={300} alt="Joe's personal headshot"
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className="c front profile-img" width={300} height={300} alt="Joe's personal headshot"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
}
