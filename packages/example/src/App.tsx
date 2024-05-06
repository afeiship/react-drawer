import React from'react';
import ReactDrawer from '@jswork/react-drawer/src';
import './index.css';
import '@jswork/react-drawer/src/style.scss';

function App() {
  const [visible, setVisible] = React.useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="h-screen relative">
      <button className="mt-5 bg-red-400 text-white p-2 w-1/4" onClick={handleOpen}>Open</button>
      <ReactDrawer visible={visible} withBackdrop keepMounted closeOnBackdropClick onClose={handleClose} className="w-64 bg-gray-100 p-4">
        <ul>
          <li>道可道，非常道；名可名，非常名。</li>
          <li>无名，天地之始，有名，万物之母。</li>
          <li>故常无欲，以观其妙，常有欲，以观其徼。</li>
          <li>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</li>
        </ul>
        <nav>
          <button className="bg-blue-400 text-white p-2 w-full" onClick={handleClose}>Close</button>
        </nav>
      </ReactDrawer>
    </div>
  );
}

export default App;
