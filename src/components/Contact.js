import React from 'react'
import Linkedin from './images/linkedin.png'
import Github from './images/github.png'
import Email from './images/email.png'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact container center-align'>
                <br />
                <a href='https://www.linkedin.com/in/davidjrada/' target='_blank' rel="noopener noreferrer"><img id='linkedin' alt='Linkedin' src={Linkedin}></img></a>
                <a href='https://github.com/DavidJRada' target='_blank' rel="noopener noreferrer"><img id='github' alt='Github' src={Github}></img></a>
                <a href='mailto:davidjrada@gmail.com'><img id='email' alt='email' src={Email}></img></a>

            </div>
        );
    }
}

export default Contact;