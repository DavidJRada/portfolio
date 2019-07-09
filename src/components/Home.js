import React from 'react'
import ProfilePic from './images/profpic.png'

function Home() {
    return (
        <main className='about-me'>
            {/* <div className='profile-pic'>
                <img id='profile-pic' src={ProfilePic} alt='Profile'>
                </img>
            </div> */}
            <div className='about-me-content'>
 
                <p>New York based software engineer with a background in social services and account management.
                    I enjoy working with code and people, and excel in team environments. Whether traveling to
                    new places or tackling new programming skills, I adapt quickly and love to learn.
                <br /><br />
                    Tech: React, Postgresql, Ruby, Rails, SQL, Javascript ES6, HTML5, MongoDB, Mongoose, Github, JQuery, Bootstrap,Materialize, CSS3, Angular.js Heroku, Node.js, Trello

            </p>
            </div>
        </main>
    );
}

export default Home;
