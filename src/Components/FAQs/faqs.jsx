import React, { useState } from 'react'
import './faq.css'
import { questions } from './data'
import Accordian from './Accordian'

const FAQs = () => {

    const [data] = useState(questions);

    return (
        <div className='faqs'>
            <div className='container'>

                <h2 className='faq-head'>Frequently Asked Questions</h2>

                {
                    data.map((curElem) => {
                        const {id} = curElem;
                        return <Accordian key={id}{...curElem}/>
                    })
                }
            </div>
        </div>
    )
}

export default FAQs