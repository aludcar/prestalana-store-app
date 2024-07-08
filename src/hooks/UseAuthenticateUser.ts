import customFetch from '../utils/customFetch';
import { useDispatch } from 'react-redux';
import { authUser } from '../actions/authActions';
import UseDataPersistence from './UseDataPersistence';

const useAuthenticateUser = () => {
  const dispatch = useDispatch();
  const { setDataPersistence } = UseDataPersistence();

  //export this function to be used in the component hook
  //problems with dispatch directly.
  const authenticateUser = async (username: string, password: string) => {
    try {
      const response = await customFetch.post('/auth/login', {
        username,
        password,
      });

      dispatch(
        authUser({
          username,
          token: response.data.token,
          isAuthenticated: true,
        })
      );
      setDataPersistence({
        key: username,
        data: {
          username,
          token: response.data.token,
          isAuthenticated: true,
          favoriteProducts: []
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { authenticateUser };
};

export default useAuthenticateUser;