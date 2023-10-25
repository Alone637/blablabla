import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import StepFour from './pages/StepFour'
import Thanks from './pages/Thanks'
import { useState } from 'react'

function App() {
  const routerConfig = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/step-one',
      element: <StepOne />
    },
    {
      path: '/step-two',
      element: <StepTwo />
    },
    {
      path: '/step-three',
      element: <StepThree />
    },
    {
      path: '/step-four',
      element: <StepFour />
    },
    {
      path: '/thanks',
      element: <Thanks />
    },
  ])

  return (
    <RouterProvider router={routerConfig}>
      <div className="App">
        {/* <Welcome /> */}
        {/* <StepOne /> */}
        <StepTwo />
      </div>
    </RouterProvider>
  );
}

export default App;
