import logo from './logo.svg';
import React from 'react';
import './Cadastro.css';

export default function Cadastro() {
    return (
        <div>
            <section className="esquerda">
                <form>
                    <h1 className="cadastro">
                        <u>
                            Cadastro
                        </u>
                    </h1>
                    <p>
                        <b>
                            Preencha os dados abaixo para começar
                        </b>
                    </p>
                    <input placeholder="Nome" type="text"/>

                    <br/>

                    <input placeholder="Sobrenome" type="text"/>

                    <br/>

                    <input placeholder="E-mail" type="text"/>

                    <br/>

                    <input placeholder="Senha" type="text" maxLength="6"/>

                    <br/><br/>

                    <button>
                        Concluir cadastro
                    </button>
                </form>
            </section>
            <section className="direita">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="app">
                    App React
                </h1>
            </section>
        </div>
    );
}