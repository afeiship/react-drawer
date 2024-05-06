import Button from '@jswork/react-drawer';
import './index.css';
import '@jswork/react-drawer/dist/style.css';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <h1>react-drawer</h1>
      <Button onClick={() => console.log('click me!')}>
        Click me
      </Button>
    </div>
  );
}

export default App;
