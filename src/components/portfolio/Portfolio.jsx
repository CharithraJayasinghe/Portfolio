import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/project.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  
  {
    id: 1,
    Image: IMG1,
    title: 'Automated Recruitment System',
    github: 'https://github.com/schinthakaSE24/group6.git',
    //demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 1,
    Image: IMG2,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 1,
    Image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 1,
    Image: IMG4,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 1,
    Image: IMG5,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 1,
    Image: IMG6,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17845658-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  }

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, Image, title, github, demo}) =>  {
            return (

        <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image} alt={title} />

            </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
            
          
        

         
      }
        
      </div>
    </section>
  )
}

export default Portfolio