import React from 'react'
import "./services.css"
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id=''>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

         <ul className='service__list'>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Designing eligent user interfaces</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>More responsive web pages</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Interractive Designs</p>
            </li>
        </ul> 
        </article>

        {/* END OF UX/UI DESIGN */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

         <ul className='service__list'>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Design more attractive web pages</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Understand the requirement of client</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Atractive appearance</p>
            </li>
        </ul> 
        </article>

        {/* END OF WEDB DEVELOPING */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

         <ul className='service__list'>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Making vedios about content</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>publish creative post</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Designing eligent user interfaces</p>
            </li>
        </ul> 
        </article>

      </div>

    
    </section>
  )
  
} 


export default Services