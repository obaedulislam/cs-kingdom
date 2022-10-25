
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
