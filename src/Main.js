import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  WheelClickFirst = () => {
    let clickElement = document.getElementsByClassName('MainGroup-PickerWheel_first')[0],
        displayGroupFirst = document.getElementsByClassName('Maingroup-SkillsSection')[0],
        displayGroupSecond = document.getElementsByClassName('Maingroup-HackSection')[0],
        displayGroupThird = document.getElementsByClassName('Maingroup-AboutSection')[0];

        if(clickElement) {
          displayGroupFirst.style.display = 'flex';
          displayGroupSecond.style.display = 'none';
          displayGroupThird.style.display = 'none';
        }
  }
  WheelClickSecond = () => {
    let clickElement = document.getElementsByClassName('MainGroup-PickerWheel_second')[0],
        displayGroupFirst = document.getElementsByClassName('Maingroup-SkillsSection')[0],
        displayGroupSecond = document.getElementsByClassName('Maingroup-HackSection')[0],
        displayGroupThird = document.getElementsByClassName('Maingroup-AboutSection')[0];

        if(clickElement) {
          displayGroupFirst.style.display = 'none';
          displayGroupSecond.style.display = 'flex';
          displayGroupThird.style.display = 'none';
        }
  }
  WheelClickThird = () => {
    let clickElement = document.getElementsByClassName('MainGroup-PickerWheel_second')[0],
        displayGroupFirst = document.getElementsByClassName('Maingroup-SkillsSection')[0],
        displayGroupSecond = document.getElementsByClassName('Maingroup-HackSection')[0],
        displayGroupThird = document.getElementsByClassName('Maingroup-AboutSection')[0];

        if(clickElement) {
          displayGroupFirst.style.display = 'none';
          displayGroupSecond.style.display = 'none';
          displayGroupThird.style.display = 'flex';
        }
  }
  render() {
    return (
      <main class="MainGroup">
        <div class="MainGroup-About_wrapper">
        <div class="MainGroup-PickerWheel_wrapper">
          <div class="MainGroup-PickerWheel">
            <div onClick={this.WheelClickFirst} class="MainGroup-PickerWheel_first">Soft skills</div>
            <div onClick={this.WheelClickSecond} class="MainGroup-PickerWheel_second">Hacking</div>
            <div onClick={this.WheelClickThird} class="MainGroup-PickerWheel_third">About</div>
            </div>
          </div>
          <div class="MainGroup-Initials_wrapper">
            <h1>Tim Zdornov</h1>
            <p>Front-end developer</p>
            <div class="AboutGroup-Logos_wrapper">
              <a href="https://vk.com/lighttimfire" target="_blank" rel="noopener noreferrer" class="AboutGroup-LogoVk"></a>
              <a href="https://github.com/dreamchasersuon" target="_blank" rel="noopener noreferrer" class="AboutGroup-LogoGitHub"></a>
              <a href="https://www.facebook.com/formulatim" target="_blank" rel="noopener noreferrer" class="AboutGroup-LogoFacebook"></a>
            </div>
          </div>
          <div class="AboutWrapper-Photo_wrapper">
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
