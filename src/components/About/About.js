import React from 'react'
import './About.css'
import Abt_findBlood from '../../assets/abtfindblood.png'
import Abtnoti from '../../assets/abtnoti.png'
import Abtfree from '../../assets/abtfree.png'
const About = () => {
  return (
    <section id='about'>
    <div className='About_container'>
            <div className='About_title'>
            WE SAVE LIVES
            </div>
            <div className='About_quote'>
            Find  blood donors near your location and make a blood request in less than 5 minutes            </div>
            <div className='About_cards'>
                <div className='Abt_findBlood'>
                    <div><img src={Abt_findBlood}/></div>
                    <h4>Find blood donors near your location and request the needed blood type</h4>
                </div>
                <div className='Abt_getNoti'>
                <div><img src={Abtnoti}></img></div>
                    <h4>Get notified about requests instantly, either on our app or by sms</h4>
                </div>
                <div className='Abt_free'>
                <div><img src={Abtfree}></img></div>
                    <h4>You don't have to pay anything, Save Life Connect is forever Free !</h4>
                </div>
            </div>
        
        
    </div>
    </section>
  )
}

export default About