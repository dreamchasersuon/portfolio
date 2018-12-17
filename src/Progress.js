import React, { Component } from 'react';
import ProgressLearnability from './loadingData.js';
import './Progress.css';

class SkillSection extends Component {
  render() {
    return (
      <article className="UsersStatsBlock_wrapper">
        <h2 className="StatsBlockHeader">About</h2>
          <section className="UsersSpecialsSection">
          <h2 className="SpecialSectionHeader">Personal</h2>
            <div className="UsersSpecialsSection_wrapper">
                <ProgressLearnability  title="Learnability"/>
                  <ProgressLearnability title="Responsibility" />
                    <ProgressLearnability title="Leadership" />
                      <ProgressLearnability title="Logic" />
                        <ProgressLearnability title="Abstract thinking" />
                      <ProgressLearnability title="Planning" />
                    <ProgressLearnability title="Tenacity" />
                <ProgressLearnability title="Stress resistance" />
            </div>
          <h2 className="SpecialSectionHeader">Hacking</h2>
          <div className="UsersSpecialsSection_wrapper">
                <ProgressLearnability  title="JS" />
                  <ProgressLearnability  title="CSS" />
                    <ProgressLearnability  title="HTML" />
                      <ProgressLearnability  title="Git" />
                    <ProgressLearnability title="React" />
                  <ProgressLearnability  title="Webpack" />
                <ProgressLearnability  title="DevTools" />
              <ProgressLearnability  title="CLI" />
            </div>
          </section>
      </article>
    )
  }
}

export default SkillSection
