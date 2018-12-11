import React, { Component } from 'react';
import './Aside.css';

class Button extends Component {
  handleClick = ({target}) => {
    const value = target.className === 'ButtonSlider' ? target.className = 'ButtonSlider Skills-Button_enabled' : target.className = 'ButtonSlider';
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
        <div className="ButtonSlider_wrapper">
          <button onClick={this.handleClick} className="ButtonSlider"></button>
        </div>
    )
  }
}

const ButtonContainer = ( { title } ) => (
  <div className="Skills-ProgressBar">
    <Button />
    <p>{ title }</p>
  </div>
)

class Aside extends Component {
  render() {
    return (
      <main>
          <section className="Maingroup-SkillsSection">
            <ButtonContainer title="Specials" />
            <ButtonContainer title="In progress" />
          </section>
          <section className="Maingroup-HackSection">
            <ButtonContainer title="Experience" />
            <ButtonContainer title="Technologies" />
            <ButtonContainer title="In progress" />
          </section>
        </main>
    )
  };
};

export default Aside;
