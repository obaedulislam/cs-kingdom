
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
