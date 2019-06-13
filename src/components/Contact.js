import React from 'react'
import Linkedin from './images/linkedin.png'
import Github from './images/github.png'
import Email from './images/email.png'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact container center-align'>
                <br />
                <a href='https://www.linkedin.com/in/davidjrada/' target='_blank'><img id='linkedin' src={Linkedin}></img></a>
                <a href='https://github.com/DavidJRada' target='_blank'><img id='github' src={Github}></img></a>
                <a href='mailto:davidjrada@gmail.com'><img id='email' src={Email}></img></a>

            </div>
        );
    }
}

export default Contact;