import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UseDataPersistence from './hooks/UseDataPersistence';
import { authUser } from './actions/authActions';
import { populateFavoriteList } from './actions/favoritesActions';
import Wrapper from './assets/styled-wrappers/AppWrapper';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { getDataPersistence } = UseDataPersistence();

  useEffect(() => {
    const savedData = getDataPersistence({});
    if (savedData) {
      dispatch(authUser({
        username: savedData.username,
        token: savedData.token,
        isAuthenticated: savedData.isAuthenticated
      }))
      dispatch(populateFavoriteList(savedData.favoriteProducts))
    }

  }, [getDataPersistence, dispatch])

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
