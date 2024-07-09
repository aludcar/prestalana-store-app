import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Wrapper from './assets/styled-wrappers/AppWrapper';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>,
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    }
  ])

  return <Wrapper>
    <RouterProvider router={router} />
  </Wrapper>
}

export default App;
