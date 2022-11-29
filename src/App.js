import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto shadow h-[92vh]">
        <RouterProvider router={router}></RouterProvider>
      </div>

    </>
  );
}

export default App;
