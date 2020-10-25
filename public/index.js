import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false,
    placement: 'left',
    items: ['left', 'right']
  };

  toggleModal = (inKey) => {
    this.setState({ [inKey]: !this.state[inKey] });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-drawer">
        <p className="p-3  text-center m-3">
          <label htmlFor="placement" className="text-white mr-3">
            Placement
          </label>
          <select
            id="placement"
            value={this.state.placement}
            onChange={(e) => {
              this.setState({ placement: e.target.value });
            }}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </p>
        <ReactDrawer
          placement={this.state.placement}
          backdrop={{
            onClick: () => {
              this.toggleModal('value');
            }
          }}
          value={this.state.value}>
          <div className="bd">
            <h1>道可道，非常道 - no backdrop</h1>
            <p>
              天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。
              故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
              是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
              夫惟弗居，是以不去。
            </p>
            <img src="https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            <button
              className="button"
              onClick={this.toggleModal.bind(this, 'value')}>
              可以关掉我
            </button>
          </div>
        </ReactDrawer>
        <button
          className="button"
          onClick={this.toggleModal.bind(this, 'value')}>
          Start~
        </button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
