import React from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/30246642?s=460&u=435097a80d5aa6b19c43193faa294bbb15516cc3&v=4"
                alt="André Borges"
              ></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>CTO @Rocketseat</p>
            <a href="https://www.google.com.br">Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/30246642?s=460&u=435097a80d5aa6b19c43193faa294bbb15516cc3&v=4"
                alt="André Borges"
              ></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>CTO @Rocketseat</p>
            <a href="https://www.google.com.br">Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/30246642?s=460&u=435097a80d5aa6b19c43193faa294bbb15516cc3&v=4"
                alt="André Borges"
              ></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>CTO @Rocketseat</p>
            <a href="https://www.google.com.br">Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/30246642?s=460&u=435097a80d5aa6b19c43193faa294bbb15516cc3&v=4"
                alt="André Borges"
              ></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>CTO @Rocketseat</p>
            <a href="https://www.google.com.br">Acessar</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
