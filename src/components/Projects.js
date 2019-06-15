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

               
                <p>Get Lucid is a dream tracking app focused on getting the user to a lucid dream state. This site has
                    encrypted Authorization using Bcrypt.</p>
                <p>Tech: Mongo, Mongoose, Express, EJS, Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/getlucid'>
                    <p>GitHub</p>
                </a>
            </div>
            <div className='project card'>
                <h2>GitPub</h2>
                <a href='https://gitpub-client.herokuapp.com/' target='_blank' rel="noopener noreferrer"><img
                    src= {GitPub} alt='Git Pub' /></a>
                <p>A pub site created with the punniest names of names</p>
                <p>Tech: React, Mongo, Mongoose, Express, Postman Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/gitPub-client'>
                    <p>GitHub</p>
                </a>
            </div>
            <div className='project card'>
                <h2>Let's Flix</h2>
                <a href='https://we-watch-client.herokuapp.com/' target='_blank' rel='noopener noreferrer'><img
                    src= {Letsflix} alt='Lets Flix' /></a>
                <p>Follow your favorite actors, directors, and friends, see what they are watching and recommend your
                    favorites to them! A social site to share movie recommendations with friends.</p>
                <p>Tech: React, Postgresql Ruby, Rails, Postman Materialize, Github and Node</p>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/DavidJRada/we-watch-client'>
                    <p>GitHub</p>
                </a>

            </div>
        </div>
    );
}

export default Projects;
