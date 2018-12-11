import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return(
      <main className="MainGroup">
        <article className="MainGroup-About_wrapper">
          <section className="MainGroup-Initials_wrapper">
            <h1 className="MainGroup-Header">Tim Zdornov</h1>
            <p className="MainGroup-Paragraph">Front-end developer</p>
            <div className="AboutGroup-Logos_wrapper">
              <a href="https://vk.com/lighttimfire" target="_blank" rel="noopener noreferrer" className="AboutGroup-LogoVk SocialLink"></a>
              <a href="https://github.com/dreamchasersuon" target="_blank" rel="noopener noreferrer" className="AboutGroup-LogoGitHub SocialLink"></a>
              <a href="https://www.facebook.com/formulatim" target="_blank" rel="noopener noreferrer" className="AboutGroup-LogoFacebook SocialLink"></a>
            </div>
          </section>
          <div className="AboutWrapper-Photo_wrapper">
          </div>
        </article>
        <article className="AboutSelf">
          Hey, my name is Tim, and I'm a junior front-end developer! I'm currently learning JavaScript and want to be an architecture developer in future.
        </article>
      </main>
    );
  }
}

export default Main;
