import React from 'react'
import Hazhar from './nav/Navbar'
import Samtrast from './samtrast/Samtrast'
import Component from './component/Component1'
import Hook from './hook/hook'
import './App.css'
import { Container } from 'react-bootstrap'

export default function App() {

  const moshakhasat = [
    { id: 1, image: '/javascript.png', zaban: 'javascript' },
    { id: 2, image: '/react.jpg', zaban: 'React js' },
    { id: 3, image: '/python.png', zaban: 'Python' },
    { id: 4, image: '/java.png', zaban: 'java' },
    { id: 5, image: '/Go.jpg', zaban: 'Go' },
    { id: 6, image: '/django.jpg', zaban: 'Django' },
    { id: 7, image: '/css.jpg', zaban: 'CSS' },
    { id: 8, image: '/angolar.png', zaban: 'Angolar' },
    { id: 9, image: '/html.jpg', zaban: 'Html' },
    { id: 10, image: '/php.jpg', zaban: 'PHP' },
    { id: 11, image: '/programmer.png', zaban: 'programmer' },
    { id: 12, image: '/flutter.png', zaban: 'Flutter' },
  ]

  return (
    <>
      <div className='container' id='samtrast1'>
        <Hazhar />
        <Samtrast />
      </div>
      <div className='container' id='hazhar1'>
        <Component {...moshakhasat[0]} />
        <Component {...moshakhasat[1]} />
        <Component {...moshakhasat[2]} />
        <Component {...moshakhasat[3]} />
        <Component {...moshakhasat[4]} />
        <Component {...moshakhasat[5]} />
        <Component {...moshakhasat[6]} />
        <Component {...moshakhasat[7]} />
        <Component {...moshakhasat[8]} />
        <Component {...moshakhasat[9]} />
        <Component {...moshakhasat[10]} />
        <Component {...moshakhasat[11]} />
      </div>
      <hr />
      <hr />
      <hr />
      <Hook />
    </>
  )
}
