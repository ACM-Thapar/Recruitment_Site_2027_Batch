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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto? Dicta ratione vel nostrum vero itaque praesentium reiciendis ducimus? Aliquid?
                    </p>

                    <button className='btn'>Register Now</button>

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