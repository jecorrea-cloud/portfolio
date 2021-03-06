import React, { Component } from 'react'
import hidden from './images/hidden.jpg';
import linkedin from './images/linkedin.png';
import medium from './images/medium.png';
import github from './images/github.png';
import Joaquin_Correa_Resume_8_2021 from './images/Joaquin_Correa_Resume_8_2021.pdf';


export default class About extends Component {
    render() {
        return (
            <div className="about-info">

                <div className="img-container">
                    <img alt="pic" src={hidden}/>
                </div>

                <p>
                    
                    &nbsp; &nbsp; My name is Joaquin Correa. I am a full stack software engineer, specialized on front-end 
                development with a certificate from the <em>Flatiron School</em>. Some of the technologies I work with are:
                <ul>
                    <li>Git</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Ruby / Ruby on Rails</li>
                    <li>SQL</li>
    
                </ul>
                &nbsp; &nbsp; Currently I reside on the Greater New York metro area. In my recent years I discovered we always need each other's help whether directly or indirectly. This is why I have an interest in 
                applying what I learn and constantly gain more knowledge to help others to the best of my extensions. I like to see myself as a team player. 
                Besides learning about my career, I have an interest in volunteering for social causes and local events, learning to play the ukulele, learning foreign languages, and enjoying metal/hard rock concerts. Feel free to reach out!
                </p>
                <br/>
                <br/>
                <div className="social-links">
                <a download href={Joaquin_Correa_Resume_8_2021} rel="opener noreferrer" target="_blank">Download Resumé</a>
                <br/>
                <br/>
                <a target="_blank" href="https://www.linkedin.com/in/joaquin-e-correa/"><img id="linkedin" src={linkedin}></img></a>
                <a target="_blank" href="https://github.com/jecorrea-cloud/"><img id="github" src={github}></img></a>
                <a target="_blank" href="https://jecorrea-64269.medium.com/"><img id="medium" src={medium}></img></a>
                </div>
                </div>
        )
    }
}
