import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import OurStory from '../../Components/AboutComponents/OurStory'
import SallerCards from '../../Components/AboutComponents/SallerCards'
import WorkerSlider from '../../Components/AboutComponents/WorkerSlider'
import ServiceCards from '../../Components/HomeComponents/ServiceComponents/ServiceCards'

function AboutPage() {
  return (
    <div className='aboutPage'>
      <div className="aboutPage_header">
        <p><Link to={"/"}><span>Home /</span></Link> About</p>
      </div>
      <OurStory/>
      <SallerCards/>
      <WorkerSlider/>
      <ServiceCards/>
    </div>
  )
}

export default AboutPage