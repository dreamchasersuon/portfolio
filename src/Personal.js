import React, { Component } from 'react';
import './Personal.css';
import SkillSection from './Progress.js';


class Personal extends Component {
  render() {
    return (
      <main className="About-MainGroup">
        <SkillSection />
      </main>
    )
  }
}

export default Personal;
