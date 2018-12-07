import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  handleClick = ({target}) => {
    const value = target.className === 'ButtonSlider' ? target.className = 'ButtonSlider Skills-Button_enabled' : target.className = 'ButtonSlider';
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    let className = 'Skills-ProgressBar';
    if (this.props.isActive) {
      className += ' Skills-Button_enabled'
    }
    return (
      <main>
          <section className="Maingroup-SkillsSection">
            <div className={className}>
            <div className="ButtonSlider_wrapper">
              <button onClick={this.handleClick} className="ButtonSlider"></button>
            </div>
              <p>Specials</p>
            </div>
            <div className={className}>
            <div className="ButtonSlider_wrapper">
              <button onClick={this.handleClick} className="ButtonSlider"></button>
            </div>
              <p>In progress</p>
            </div>
          </section>
          <section className="Maingroup-HackSection">
            <div className={className}>
              <div className="ButtonSlider_wrapper">
                <button onClick={this.handleClick} className="ButtonSlider"></button>
              </div>
              <p>Experience</p>
            </div>
            <div className={className}>
            <div className="ButtonSlider_wrapper">
              <button onClick={this.handleClick} className="ButtonSlider"></button>
            </div>
              <p>Technologies</p>
            </div>
            <div className={className}>
            <div className="ButtonSlider_wrapper">
              <button onClick={this.handleClick} className="ButtonSlider"></button>
            </div>
              <p>In progress</p>
            </div>
          </section>
          <section className="Maingroup-AboutSection">
          </section>
        </main>
    )
  };
};

export default Aside;
