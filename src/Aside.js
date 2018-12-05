import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  handleClickFirst = () => {
      let button = document.getElementsByClassName('ButtonSlider_first')[0],
          wrapper = document.getElementsByClassName('FirstWrapper')[0],
          slider = document.getElementsByClassName('Skills-Button_enabled')[0];
      if(button) {
        if(!slider) {
          button.className += " Skills-Button_enabled";
          wrapper.className += " ButtonWrapperBackground";
        }
        else if (slider) {
          button.className = "ButtonSlider_first";
          wrapper.className = "ButtonSlider_wrapper FirstWrapper";
        }
      }
  }
  handleClickSecond = () => {
      let buttonSecond = document.getElementsByClassName('ButtonSlider_second')[0],
          wrapper = document.getElementsByClassName('SecondWrapper')[0],
          slider = document.getElementsByClassName('Skills-Button_enabled')[0];
      if(buttonSecond) {
        if(!slider) {
          buttonSecond.className += " Skills-Button_enabled";
          wrapper.className += " ButtonWrapperBackground";
        }
        else if (slider) {
          buttonSecond.className = "ButtonSlider_second";
          wrapper.className = "ButtonSlider_wrapper SecondWrapper";
        }
      }
  }
  handleClickThird = () => {
      let buttonThird = document.getElementsByClassName('ButtonSlider_third')[0],
          wrapper = document.getElementsByClassName('ThirdWrapper')[0],
          slider = document.getElementsByClassName('Skills-Button_enabled')[0];
      if(buttonThird) {
        if(!slider) {
          buttonThird.className += " Skills-Button_enabled";
          wrapper.className += " ButtonWrapperBackground";
        }
        else if (slider) {
          buttonThird.className = "ButtonSlider_wrapper ButtonSlider_third";
          wrapper.className = "ButtonSlider_wrapper ThirdWrapper";
        }
      }
  }
  render() {
    return (
      <main>
          <section class="Maingroup-SkillsSection">
            <div class="Skills-ProgressBar_first_wrapper">
              <div class="ButtonSlider_wrapper FirstWrapper">
                <button onClick={this.handleClickFirst} class="ButtonSlider_first"></button>
              </div>
              <h2>Side-effects</h2>
            </div>
            <div class="Skills-ProgressBar_second_wrapper">
            <div class="ButtonSlider_wrapper SecondWrapper">
              <button onClick={this.handleClickSecond} class="ButtonSlider_second"></button>
            </div>
              <h2>Specials</h2>
            </div>
            <div class="Skills-ProgressBar_third_wrapper">
            <div class="ButtonSlider_wrapper ThirdWrapper">
              <button onClick={this.handleClickThird} class="ButtonSlider_third"></button>
            </div>
              <h2>In progress</h2>
            </div>
          </section>
          <section class="Maingroup-HackSection">
            <div class="Skills-ProgressBar_first_wrapper">
              <div class="ButtonSlider_wrapper FirstWrapper">
                <button onClick={this.handleClickFirst} class="ButtonSlider_first"></button>
              </div>
              <h2>Experience</h2>
            </div>
            <div class="Skills-ProgressBar_second_wrapper">
            <div class="ButtonSlider_wrapper SecondWrapper">
              <button onClick={this.handleClickSecond} class="ButtonSlider_second"></button>
            </div>
              <h2>Technologies</h2>
            </div>
            <div class="Skills-ProgressBar_third_wrapper">
            <div class="ButtonSlider_wrapper ThirdWrapper">
              <button onClick={this.handleClickThird} class="ButtonSlider_third"></button>
            </div>
              <h2>In progress</h2>
            </div>
          </section>
          <section class="Maingroup-AboutSection">
            
          </section>
        </main>
    )
  };
};



export default Aside;
