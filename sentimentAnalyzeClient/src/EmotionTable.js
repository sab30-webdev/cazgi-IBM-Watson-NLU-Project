import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
                <tr>
                   <td>Joy</td>
                   <td>{this.props.emotions.joy}</td>
                </tr>
                <tr>
                   <td>Fear</td>
                   <td>{this.props.emotions.fear}</td>
                </tr>
                <tr>
                   <td>Disgust</td>
                   <td>{this.props.emotions.disgust}</td>
                </tr>
                <tr>
                   <td>Anger</td>
                   <td>{this.props.emotions.anger}</td>
                </tr>
                <tr>
                   <td>Sadness</td>
                   <td>{this.props.emotions.sadness}</td>
                </tr>
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
