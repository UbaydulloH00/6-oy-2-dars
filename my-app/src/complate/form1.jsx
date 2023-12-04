import React from 'react'
import './form1.css'
import './form1.js'

export function Form1() {
    return (
        <div>
            <div className="container">
                <div className='sarlavha'>
                    <h2>Get an Estimate for Workspace</h2>
                </div>
                <div className="text">
                    <h1>Post Your Requirements</h1>
                    <p>Please fill the form below to receive a quote for workspace. <br /> 
                        Please add all the details required.</p>
                </div>

                <div className="form">
                  <div className="form_text">
                    <h2>Contact details</h2>
                    <p>Please fill your information so we can get in touch with you.</p>
                  </div>
                  <div className='chiziq'></div>
                   <div className="form__input">
                   <form id='formAll'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder='Your Name' />
                        <span className='span' id='nameSpan'></span>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" name="" id="phone" placeholder='(123) 456 - 7890' />
                        <span className='span' id='phoneSpan'></span>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' placeholder='Your Mail ID' />
                        <span className='span' id='emailSpan'></span>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="" id="date" placeholder=' dd - mm - yyyy' />
                        <span className='span' id='dataSpan'></span>
                    </form>
                   </div>
                </div>
                <div className="button">
                    <button id='btn'>Next</button>
                </div>

                <div className='done' id='done'></div>

            </div>
        </div>
    )
}
