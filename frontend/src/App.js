import './App.css';
import HomePage from './pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <HomePage />
    </div>
  );
}

export default App;
