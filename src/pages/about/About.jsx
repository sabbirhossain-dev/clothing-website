import React from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import AboutCard from './AboutCard'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <>
    <div className='mt-8'>
    <Title text1='ABOUT' text2=' US'/>
      <div className='flex flex-col md:flex-row gap-16 my-10'>
      <div className=''>
        <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
      </div>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>

        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

        <h4 className='text-gray-900 font-bold'>Our Mission</h4>

        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
      </div>
      </div>

      <AboutCard />
      <Subscribe />
    </div>
    </>
  )
}

export default About
