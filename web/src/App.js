import React, { useState, usEffect } from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import { useEffect } from 'react';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
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
            <a href="https://www.google.com.br">Acessar perfil no Github</a>
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
