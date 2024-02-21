import { Link, Outlet } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
