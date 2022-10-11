import React from 'react'
import './Home.css'
import Illustration from './../../Assests/illustration.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>


                {/* Left Side */}
                <div className='left'>


                    <h1 className='header-1'>RECRUITMENTS</h1>
                    <h1 className='header-2'>2022</h1>

                    <p className='para'>
                        Looking for a way to get involved in Computing? ACM is the perfect opportunity! Join us to learn more about the latest trends in technology, meet other students interested in Computing, and have a lot of fun!
                    </p>

                    <button className='btn'><a href='https://forms.gle/bzrGRX36sT6cbK5B8'>Register Now</a></button>

                </div>


                {/* Right Side */}

                <div className='right'>
                    <div className='img-container'>
                        <img src={Illustration} alt='' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home