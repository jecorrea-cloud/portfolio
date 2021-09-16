import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className='site-content'>
                <div class="card">
                    <div class="effect-img">
                        <img src="https://i.ibb.co/tckNt0h/Poke-Dexter-Preview.png" alt="poke"/>
                    </div>
                    <div class="effect-text">
                        <h2>PokeDéxter</h2>
                        <p>A JS searcher for Pokémon stats that uses the Pokémon API</p>
                        <a class="effect-link" href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Site</a>
                        <br/>
                        <a class="effect-link" href="https://github.com/jecorrea-cloud/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Repo</a>
                    </div>
                </div>

                <div class="card">
                    <div class="effect-img">
                        <img src="https://i.ibb.co/tckNt0h/Poke-Dexter-Preview.png" alt="poke"/>
                    </div>
                    <div class="effect-text">
                        <h2>Alive-Journal</h2>
                        <p>A to-do list made with React.js</p>
                        <a class="effect-link" href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Site</a>
                        <br/>
                        <a class="effect-link" href="https://github.com/jecorrea-cloud/phase4-frontend" rel="opener noreferrer" target="_blank" >Repo</a>
                    </div>
                </div>

                <div class="card">
                    <div class="effect-img">
                        <img src="https://i.ibb.co/tckNt0h/Poke-Dexter-Preview.png" alt="poke"/>
                    </div>
                    <div class="effect-text">
                        <h2>Book-Cook</h2>
                        <p>Your personal recipe book made with React.js</p>
                        <a class="effect-link" href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Site</a>
                        <br/>
                        <a class="effect-link" href="https://github.com/jecorrea-cloud/cookbook-frontend" rel="opener noreferrer" target="_blank" >Repo</a>
                    </div>
                </div>

                {/* <div class="card">
                    <div class="effect-img">
                        <img src="https://i.ibb.co/tckNt0h/Poke-Dexter-Preview.png" alt="poke"/>
                    </div>
                    <div class="effect-text">
                        <h2>PokeDéxter</h2>
                        <p>A JS searcher for Pokémon stats that uses the Pokémon API</p>
                        <a href="https://jecorrea-cloud.github.io/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Site</a>
                        <br/>
                        <a href="https://github.com/jecorrea-cloud/jecorrea-pokedex/" rel="opener noreferrer" target="_blank" >Repo</a>
                    </div>
                </div> */}



            </div>
        )
    }
}