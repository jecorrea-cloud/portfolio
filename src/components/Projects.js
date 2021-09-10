import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className='site-content'>
                <br/>
                <div class="card">
                    <div class="effect-img">
                        <img src="https://i.ibb.co/tckNt0h/Poke-Dexter-Preview.png" alt="poke"/>
                    </div>
                    <div class="effect-text">
                        <h2>PokeDéxter</h2>
                        <p>A vanilla JS searcher for Pokémon stats, that uses the Pokémon API</p>
                        <a href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Site</a>
                        
                        <a href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Repo</a>
                    </div>
                </div>



            </div>
        )
    }
}