# react-drawer
> Drawer for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-drawer
```

## properties
| Name        | Type   | Required | Default | Description                                                                                           |
| ----------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------------- |
| className   | string | false    | -       | The extended className for component.                                                                 |
| value       | bool   | false    | -       | Abstract visible value.                                                                               |
| destroyable | bool   | false    | true    | If element destroyed when visible to false.                                                           |
| rootable    | bool   | false    | true    | If attach the visible element to document root or a container.                                        |
| onChange    | func   | false    | noop    | The handler when visible changed, default is `noop` function, present or dismiss action will trigger. |
| onPresent   | func   | false    | noop    | The handler when present.                                                                             |
| onDismiss   | func   | false    | noop    | The handler when dismiss.                                                                             |
| backdrop    | union  | false    | -       | Backdrop props or not display backdrop.                                                               |
| placement   | enum   | false    | 'left'  | Drawer come from where.                                                                               |


## usage
1. import css
  ```scss
  @import "~@feizheng/webkit-sassui-backdrop";
  @import "~@feizheng/webkit-sassui-drawer";
  @import "~@feizheng/react-drawer/dist/style.scss";

  // customize your styles:
  $react-drawer-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDrawer from '@feizheng/react-drawer';
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
  ```

## documentation
- https://afeiship.github.io/react-drawer/


## license
Code released under [the MIT license](https://github.com/afeiship/react-drawer/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-drawer
[version-url]: https://npmjs.org/package/@jswork/react-drawer

[license-image]: https://img.shields.io/npm/l/@jswork/react-drawer
[license-url]: https://github.com/afeiship/react-drawer/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-drawer
[size-url]: https://github.com/afeiship/react-drawer/blob/master/dist/react-drawer.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-drawer
[download-url]: https://www.npmjs.com/package/@jswork/react-drawer
