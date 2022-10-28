
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}></RouterProvider>
      
      <Toaster
        toastOptions={{
          style: {
            background: 'yellow',
            color: '#000',
            fontSize: '16px',
            fontWeight:'600'
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}

export default App;
