import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return(
      <main className="InfoPanelBlock">
        <article className="ProfileModalWindow">
          <section className="UserDataBlock">
            <h1 className="UsersInitials">Tim Zdornov</h1>
            <p className="UsersJob">Frot-end develope</p>
            <div className="UsersSocialLinks">
              <a href="https://vk.com/lighttimfire" target="_blank" rel="noopener noreferrer" className="LogoVk SocialLink">VK</a>
              <a href="https://github.com/dreamchasersuon" target="_blank" rel="noopener noreferrer" className="LogoGitHub SocialLink">GH</a>
              <a href="https://www.facebook.com/formulatim" target="_blank" rel="noopener noreferrer" className="LogoFacebook SocialLink">FB</a>
            </div>
          </section>
            <div className="UsersAvatar">
          </div>
        </article>
        <article className="UsersMessage">
          Hey, my name is Tim, and I'm a junior front-end developer! I'm currently learning JavaScript and want to be an architecture developer in future.
        </article>
      </main>
    );
  }
}

export default Main;
