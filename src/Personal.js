import React, { Component } from 'react';
import './Personal.css';
import Aside from './Aside.js';

class Personal extends Component {
  render() {
    return (
      <main className="About-MainGroup">
        <section className="Personal-Specials">
          <h2>Specials<Aside /></h2>
          <div className="SpecialsBlock">
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">92%</text></svg>
                </div>
                <p>Learnability</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">90%</text></svg>
                </div>
                <p>Responsibility</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">79%</text></svg>
                </div>
                <p>Leadership</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">75%</text></svg>
                </div>
                <p>Logic</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">76%</text></svg>
                </div>
                <p>Abstract thinking</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">80%</text></svg>
                </div>
                <p>Planning</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">97%</text></svg>
                </div>
                <p>Tenacity</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">91%</text></svg>
                </div>
                <p>Stress resistance</p>
            </div>
          </div>
        </section>
        <section className="Personal-Hack">
          <h2>Stack<Aside /></h2>
          <div className="SpecialsBlock">
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">64%</text></svg>
                </div>
                <p>JS(ES6+)</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">67%</text></svg>
                </div>
                <p>CSS(+PostCSS)</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">89%</text></svg>
                </div>
                <p>HTML</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">25%</text></svg>
                </div>
                <p>Git</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">10%</text></svg>
                </div>
                <p>React</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">20%</text></svg>
                </div>
                <p>Webpack</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">69%</text></svg>
                </div>
                <p>DevTools</p>
            </div>
            <div className="Specials-Skill">
              <div className="Spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                  <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
                    <text x="10" y="18" font-family="Verdana" font-size="7" fill="blue">15%</text></svg>
                </div>
                <p>CLI</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Personal;
