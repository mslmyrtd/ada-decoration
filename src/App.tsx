import AppRouter from './router/Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer position='bottom-left' />
    </>

  );
}

export default App;
