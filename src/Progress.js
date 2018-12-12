import React, { Component } from 'react';
const data = {
  1: "53%", 2: "Learn"
}
const tifOptions = Object.keys(data).map(key =>
    <option key={key} value={key}></option>
)
class SkillSection extends Component {
  render() {
    return (
      <article className="UsersStatsBlock_wrapper">
        <h2 className="StatsBlockHeader">About</h2>
          <section className="UsersSpecialsSection">
          <h2 className="SpecialSectionHeader">Personal</h2>
            <div className="UsersSpecialsSection_wrapper">
                <SpecialLearn  title="Learnability"/>
                  <SpecialRespons title="Responsibility" />
                    <SpecialLead title="Leadership" />
                      <SpecialLogic title="Logic" />
                        <SpecialAbstract title="Abstract thinking" />
                      <SpecialPlan title="Planning" />
                    <SpecialTenacity title="Tenacity" />
                <SpecialStress title="Stress resistance" />
            </div>
          <h2 className="SpecialSectionHeader">Hacking</h2>
          <div className="UsersSpecialsSection_wrapper">
                <SpecialJS  title="JS" />
                  <SpecialCSS  title="CSS" />
                    <SpecialHTML  title="HTML" />
                      <SpecialGit  title="Git" />
                    <SpecialReact  title="React" />
                  <SpecialWebpack  title="Webpack" />
                <SpecialDevTools  title="DevTools" />
              <SpecialCLI  title="CLI" />
            </div>
          </section>
      </article>
    )
  }
}

const SpecialLearn = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressLearnability />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialRespons = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressResponsibility />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialLead = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressLeadership />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialLogic = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressLogic />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialAbstract = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressAbstract />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialPlan = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressPlanning />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialTenacity = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressTenacity />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialStress = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressStress />
      </div>
    <p>{ title }</p>
  </div>
);
const SpecialJS = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressJS />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialCSS = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressCSS />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialHTML = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressHTML />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialGit = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressGit />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialReact = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressReact />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialWebpack = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressWebpack />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialDevTools = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressDevTools />
      </div>
    <p>{ title }</p>
  </div>
);

const SpecialCLI = ( {title} ) => (
  <div className="Specials-Skill">
    <div className="Spinner">
        <ProgressClI />
      </div>
    <p>{ title }</p>
  </div>
);

class ProgressSVG extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress, percent } = this.props;
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
       >
        <circle
          stroke="rgba(170, 190, 250, 1)"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
         <text x="50%" y="50%" text-anchor="middle" fill="white" stroke-width="2px" dy=".3em">{ percent }</text>
      </svg>
    );
  }
}

class ProgressLearnability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount(props) {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 95 });
      if (this.state.progress === 95)
        clearInterval(interval);
    }, 1000);
  }

  render(props) {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent={this.props.percent}
      />
    );
  }
}

class ProgressResponsibility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 97 });
      if (this.state.progress === 97)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="97%"
      />
    );
  }
}

class ProgressLeadership extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 79 });
      if (this.state.progress === 79)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="79%"
      />
    );
  }
}

class ProgressLogic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 74 });
      if (this.state.progress === 74)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="74%"
      />
    );
  }
}

class ProgressAbstract extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 82 });
      if (this.state.progress === 82)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="82%"
      />
    );
  }
}

class ProgressPlanning extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 93 });
      if (this.state.progress === 93)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="93%"
      />
    );
  }
}

class ProgressTenacity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 97 });
      if (this.state.progress === 97)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="97%"
      />
    );
  }
}

class ProgressStress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 91 });
      if (this.state.progress === 91)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="91%"
      />
    );
  }
}

class ProgressJS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 64 });
      if (this.state.progress === 64)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="64%"
      />
    );
  }
}

class ProgressCSS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 72 });
      if (this.state.progress === 72)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="72%"
      />
    );
  }
}

class ProgressHTML extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 90 });
      if (this.state.progress === 90)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="90%"
      />
    );
  }
}

class ProgressGit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 25 });
      if (this.state.progress === 25)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="25%"
      />
    );
  }
}

class ProgressReact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 15 });
      if (this.state.progress === 15)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="15%"
      />
    );
  }
}

class ProgressWebpack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 22 });
      if (this.state.progress === 22)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="22%"
      />
    );
  }
}

class ProgressDevTools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 69 });
      if (this.state.progress === 69)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="69%"
      />
    );
  }
}

class ProgressClI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 21 });
      if (this.state.progress === 21)
        clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <ProgressSVG
        radius={ 40 }
        stroke={ 2.5 }
        progress={ this.state.progress }
        percent="21%"
      />
    );
  }
}

export default SkillSection
