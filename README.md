# react-drawer
> Drawer for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-drawer
```

## update
```shell
npm update @feizheng/react-drawer
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
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
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-drawer">
          <ReactDrawer className="bg-gray-800 mb-5 text-white" />
          <button className="button">Start~</button>
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

[version-image]: https://img.shields.io/npm/v/@feizheng/react-drawer
[version-url]: https://npmjs.org/package/@feizheng/react-drawer

[license-image]: https://img.shields.io/npm/l/@feizheng/react-drawer
[license-url]: https://github.com/afeiship/react-drawer/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-drawer
[size-url]: https://github.com/afeiship/react-drawer/blob/master/dist/react-drawer.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-drawer
[download-url]: https://www.npmjs.com/package/@feizheng/react-drawer
