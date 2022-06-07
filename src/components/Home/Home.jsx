import React from 'react'
import './Home.css'

import {IoMdPaw} from 'react-icons/io'
import IMG1 from '../../img/home-img1.jpeg'
import IMG2 from '../../img/home-img2.jpeg'
import IMG3 from '../../img/home-img3.jpeg'
import IMG4 from '../../img/home-img4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {

  const data = [
    {
      id: 1,
      title: 'DOG DAYCARE',
      image: IMG1,
      description: 'Dogs love interaction. Whether it be with their own kind or their humans! They crave the chance to be a part of someone’s life. At Fetchers Play and Stay, doggy daycare services are designed to encourage interaction and increase their social skills. Dogs are placed in Playtime areas that are best suited for their temperament, size and activity level.',
      color: 'red'
    },
    {
      id: 2,
      title: 'OVERNIGHT BOARDING',
      image: IMG2,
      description: 'Fetchers Sleepover dog boarding service offers two types of luxurious rooms: Suites and Penthouses. Our rooms are designed to create a peaceful oasis for any size pup. With our suites and penthouses, you have the ability to choose what size and accommodations best fit your needs!',
      color: 'blue'
    },
    {
      id: 3,
      title: 'GROOMING & SPA SERVICES',
      image: IMG3,
      description: 'Fetchers offers both individual dog grooming services and spa packages suited for your pet. Call today to schedule your grooming appointment or to receive a free price quote*.',
      color: 'green'
    },
    {
      id: 4,
      title: 'TREATS, FOOD, ACCESSORIES, & MORE',
      image: IMG4,
      description: 'We also offer dog treats and food that are available for purchase in store!',
      color: 'orange'
    },
  ]

  return (
    <>
    <h1>WELCOME TO FETCHERS</h1>
    <div className="container home__container">

    {/* Attempting to change the cards into a swiper where you can click through each that displays title, image, description, etc */}
    {/* <Swiper className="container swiper__container"
       
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
       {
         data.map(({image, title, description, color}, index) => {
           return (
             <SwiperSlide key={index} className="card">
               <h2 className="card__title">{title}</h2>
               <div className="card__image">
                 <img src={image} />
               </div>
               <small className="card__description">{description}</small>
             </SwiperSlide>
           )
         })
       }
     </Swiper> */}
      <div className="card__container">
        {
          data.map(({id, title, color}) => {
            return (
              <article key={id} className="item__card">
                <div className="item__card-pawprint">
                  <IoMdPaw size={100} color={color} className='pawprint'/>
                </div>
                <h2>{title}</h2>    
              </article>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home