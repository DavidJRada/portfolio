import React from 'react'
import ProfilePic from './images/profpic.png'

function Home() {
    return (
        <main className='about-me'>
            <div className='profile-pic'>
                <img id='profile-pic' src={ProfilePic} alt='Profile Picture'>
                </img>
            </div>
            <div className='about-me-content'>
                <p>New York based software engineer with a background in social services and account management.
                    I enjoy working with code and people, and excel in team environments. Whether traveling to
                    newplaces or tackling new programming skills, I adapt quickly and love to learn.
                <br /><br />
                    Tech: React, Javascript ES6, React, Mongoose, MongoDB, PostgresSQL, Git, API Integration,
                    Ruby,
                    Rails
            </p>
            </div>
        </main>
    );
}

export default Home;
