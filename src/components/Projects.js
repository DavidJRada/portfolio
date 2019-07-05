import React from 'react'
import Getlucid from './images/get-lucid-home.png'
import GitPub from './images/gitpub-drinks.png'
import Letsflix from './images/letsflix.png'

function Projects() {
    return (
        <div className='projects container center-align'>


            <div className='project card'>
                <h2>Get Lucid</h2>
                <a href='https://getlucid.herokuapp.com/' target='_blank' rel="noopener noreferrer"><img src={Getlucid} alt='Get Lucid'></img></a>


                <p>A dream tracker and lucid dreaming tool for users to create and track dreams to
be edited or saved for later. The purpose of the site is to encourage mindful
dreams and eventually control in dreams. Full user authorization with
encryption using Bcrypt and Express Sessions</p>
                <p>Tech: Mongo, Mongoose, Express, EJS, Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/getlucid'>
                    <p>GitHub</p>
                </a>
            </div>
            <div className='project card'>
                <h2>GitPub</h2>
                <a href='https://gitpub-client.herokuapp.com/' target='_blank' rel="noopener noreferrer"><img
                    src={GitPub} alt='Git Pub' /></a>
                <p>A fictional restaurant website for admin to add/edit menu items and public to
access. Worked with a team of three and coordinated the group Github workflow
and Heroku deployment using various build packs.</p>
                <p>Tech: React, Mongo, Mongoose, Express, Postman Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/gitPub-client'>
                    <p>GitHub</p>
                </a>
            </div>
            <div className='project card'>
                <h2>Let's Flix</h2>
                <a href='https://we-watch-client.herokuapp.com/' target='_blank' rel='noopener noreferrer'><img
                    src={Letsflix} alt='Lets Flix' /></a>
                <p>Prototype of a social site to follow friends and share movie recommendations.
Users can find movie information from an OMDB API call with info added to the
post.</p>
                <p>Tech: React, Postgresql Ruby, Rails, Postman Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/we-watch-client'>
                    <p>GitHub</p>
                </a>

            </div>
        </div>
    );
}

export default Projects;
