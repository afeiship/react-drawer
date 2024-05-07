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

## usage
1. import css
  ```scss
  @import "~@jswork/react-drawer/dist/style.css";

  // or use sass
  @import "~@jswork/react-drawer/dist/style.scss";
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDrawer, { Placement } from '@jswork/react-drawer';
  import './index.css';
  import '@jswork/react-drawer/dist/style.scss';

  const placements = ['top', 'right', 'bottom', 'left'];

  function App() {
    const [visible, setVisible] = React.useState(false);
    const [placement, setPlacement] = React.useState<Placement>('left');

    const handleOpen = () => {
      setVisible(true);
    };

    const handleClose = () => {
      setVisible(false);
    };

    return (
      <div className="h-screen relative">
        <nav className="pt-4 mx-auto fc x-2 w-1/5">
          <button className="btn btn-default btn-wide" onClick={handleOpen}>Open</button>
          <select name="placement" className="select select-bordered w-full" value={placement}
                  onChange={(e) => setPlacement(e.target.value as Placement)}>
            {placements.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </nav>

        <ReactDrawer visible={visible} withBackdrop keepMounted closeOnBackdropClick closeOnEscape onClose={handleClose}
                     placement={placement} className="w-64 bg-gray-100 p-4">
          <ul>
            <li>道可道，非常道；名可名，非常名。</li>
            <li>无名，天地之始，有名，万物之母。</li>
            <li>故常无欲，以观其妙，常有欲，以观其徼。</li>
            <li>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</li>
          </ul>
          <nav>
            <button className="btn btn-primary mt-2 w-full" onClick={handleClose}>Close</button>
          </nav>
        </ReactDrawer>
      </div>
    );
  }

  export default App;

  ```

## preview
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
