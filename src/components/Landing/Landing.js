import React from 'react'
import './Landing.css'
const Landing = () => {
  return (
    <section id='landing'>
    <div className='Landing_container'>
        <div className='Landing_content'>
            <div className='Landing_title'>
                RessQ
            </div>
            <div className='Landing_quote'>
            Be the reason for someone's heartbeat.
            </div>
            <div className='Landing_buttons'>
                <div className='todonate'><button>To Donate</button></div>
                <div className='needblood'><button>Need Blood</button></div>
            </div>
        </div>
        <div className='Landing_pic'>

        </div>
    </div>
    </section>
  )
}

export default Landing