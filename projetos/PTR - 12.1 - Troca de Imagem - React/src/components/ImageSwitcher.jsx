import React, { useState } from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

export default function ImageSwitcher() {
  const [current, setCurrent] = useState({ src: img1, alt: 'Imagem 1' })

  return (
    <div className="box">
      <img src={current.src} alt={current.alt} id="imagem" />
      <div className="botoes">
        <button onClick={() => setCurrent({ src: img1, alt: 'Imagem 1' })}>1</button>
        <button onClick={() => setCurrent({ src: img2, alt: 'Imagem 2' })}>2</button>
        <button onClick={() => setCurrent({ src: img3, alt: 'Imagem 3' })}>3</button>
      </div>
    </div>
  )
}