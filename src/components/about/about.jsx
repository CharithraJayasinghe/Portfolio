import React from 'react'
import "./about.css"
import ME from '../../assets/my1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>

                  </div>

               <div className="about__content">
                 <div className="about__cards">

                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5> Education
                        <small> Student from UOM</small></h5>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5> 
                        <small> </small></h5>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5> Projects
                        <small> 4+ Comleted</small></h5>
                    </article>


                </div>

                <p>
                    IT Student from Institute Of Technology University Of Moratuwa. 
                    Holds working experience with modern frameworks. willing to learn new technology in deed.
                </p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>

  )
}

export default about