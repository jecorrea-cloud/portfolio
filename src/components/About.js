import React, { Component } from 'react'
import hidden from './images/hidden.jpg';
import linkedin from './images/linkedin.png';
import medium from './images/medium.png';
import github from './images/github.png';


export default class About extends Component {
    render() {
        return (
            <div className="about-info">

                <div className="img-container">
                    <img alt="pic" src={hidden}/>
                </div>

                <p>
                    Hey! My name is Joaquin Correa and I am a full stack software engineer, specialized on front-end 
                development. Recently, I graduated from the Flatiron School and now I am actively looking to make an entry into the IT world. 
                Currently I reside on the Greater New York area, but I am always open out of state offer. In my recent years I discovered we are in a world where we always need each other whether directly or indirectly. This is why I have interests in 
                applying what I learn and constantly gain more knowledge to help others to the best of my extensions. I like to see myself as a teamplayer. Besides learning about my career, I have an interest in playing the ukulele, learning foreign languages, and enjoy metal and hard rock concerts. Feel free to reach out!
                </p>
                <br/>
                <br/>
                <div className="social-links">
                <p>Download Resumé</p>
                <a target="_blank" href="https://www.linkedin.com/in/joaquin-correa-a64688181/"><img id="linkedin" src={linkedin}></img></a>
                <a target="_blank" href="https://github.com/jecorrea-cloud/"><img id="github" src={github}></img></a>
                <a target="_blank" href="https://jecorrea-64269.medium.com/"><img id="medium" src={medium}></img></a>
                </div>
                </div>
        )
    }
}
