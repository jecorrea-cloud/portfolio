import React, { Component } from 'react'
import hidden from './images/hidden.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="about-info">

                <img alt="pic" src={hidden}/>
                <p>Hey there! My name is Joaquin Correa and I am a full stack software engineer, specialized on front-end 
                development. Recently, I graduated from the Flatiron School and now I am willing make an entry into the IT world. 
                Currently I am residing on the Greater New York area, but I am always open for moving out of state or work remotely. In my recent years I discovered we are in a world where we always need each other whether directly or indirectly. This is why I have interests in 
                applying what I learn and constantly get more knowledge to help others to the best of my extensions. Have to say I like to see myself as a teamplayer. Besides learning about my career, I have an interest in playing the ukulele, learning foreign languages, and enjoy metal and hard rock concerts. Feel free to reach out!</p>
                <br/>
                <br/>
                <div className="social-links">
                <p>Download Resume</p>
                <a target="_blank" href="https://www.linkedin.com/in/joaquin-correa-a64688181/"><button id="linkedin"></button></a>
                <a target="_blank" href="https://github.com/jecorrea-cloud/"><button id="github"></button></a>
                <a target="_blank" href="https://jecorrea-64269.medium.com/"><button id="medium"></button></a>
                </div>
                </div>
        )
    }
}
