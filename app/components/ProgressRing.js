import React from 'react';
import Svg, {Circle} from 'react-native-svg'

export default class ProgressRing extends React.Component {
    
    state = {}
  
    constructor(props) {
      super(props);
      
      const { diameter, stroke, progress } = this.props;
      this.state = { progress }

      this.radius = diameter / 2

      this.normalizedRadius = this.radius - (stroke / 2);
      this.circumference = this.normalizedRadius * 2 * Math.PI;
    }
    
    render() {
      const { diameter, stroke } = this.props;
  
      const strokeDashoffset = (this.circumference - this.state.progress / 100 * this.circumference);
    
      return (
        <Svg
          height={diameter}
          width={diameter}
         >
          <Circle
            stroke={this.props.strokeColor}
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ this.circumference + ' ' + this.circumference }
            style={ { strokeDashoffset } }
            strokeWidth={ stroke }
            r={ this.normalizedRadius }
            cx={ this.radius }
            cy={ this.radius }

           />
        </Svg>
      );
    }
  }