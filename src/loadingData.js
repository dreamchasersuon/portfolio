import React from 'react';
const dataPercents = ["53", "53%", "53%", "53%", "53%", "53%", "53%", "53%", "53%", "53%",
              "53%","53%","53%",  "53%","53%",  "53%", "53"]

const dataTitles = ["53", "53%", "53%", "53%", "53%", "53%", "53%", "53%", "53%", "53%",
              "53%","53%","53%",  "53%","53%",  "53%", "53"]

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
      progress: 0,
      percent: '',
    };
  }

  componentDidMount(props) {
    let d = dataTitles,
        p = dataPercents;
    const interval = setInterval(() => {
      this.setState(
        { progress: this.state.progress + data['1'] });
      if (this.state.progress === data['1'])
        clearInterval(interval);
    }, 1000);
  }

  render(props) {
    return (
      <div className="Specials-Skill">
        <div className="Spinner">
          <ProgressSVG
            radius={ 40 }
            stroke={ 2.5 }
            progress={ this.state.progress }
            percent={ data['1'] }
            />
          </div>
        <p>{ title }</p>
      </div>
    );
  }
}

export default ProgressLearnability;
