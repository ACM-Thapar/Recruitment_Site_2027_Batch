import React, { useState } from 'react'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import './Accordian.css'

const Accordian = ({question, answer}) => {

    const [show, setShow] = useState(false);

  return (
    <div>

        <div className='main-heading' onClick={() => setShow(!show)}>
            <p className='question'>{question}</p>
            <div>
                {show? <BsChevronUp size={20}/> : <BsChevronDown size={20}/>}
            </div>
        </div>

        {
            show && <p className='answers'>{answer}</p>
        }


    </div>
  )
}

export default Accordian